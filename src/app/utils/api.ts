import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Router from "next/router";

const backendBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000/api";

const apiClient = axios.create({
    baseURL: backendBaseUrl,
    timeout: 30000,
    headers: {
        "Content-Type": "application/json",
    },
});

// Request interceptor: attach access token
apiClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Refresh token logic
let isRefreshing = false;
let failedQueue: any[] = [];

const processQueue = (error: any, token: string | null = null) => {
    failedQueue.forEach(prom => {
        if (error) {
            prom.reject(error);
        } else {
            prom.resolve(token);
        }
    });
    failedQueue = [];
};

async function refreshAccessToken() {
    const refresh = localStorage.getItem("refresh");
    if (!refresh) return null;
    try {
        const response = await axios.post(
            `${backendBaseUrl}/token/refresh/`,
            { refresh },
            { headers: { "Content-Type": "application/json" } }
        );
        const { access } = response.data;
        if (access) {
            localStorage.setItem("token", access);
            return access;
        }
    } catch (err) {
        localStorage.removeItem("token");
        localStorage.removeItem("refresh");
        localStorage.removeItem("isLoggedIn");
        return null;
    }
}

// Response interceptor: handle 401 and refresh
apiClient.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;
        if (
            error.response &&
            error.response.status === 401 &&
            !originalRequest._retry
        ) {
            if (isRefreshing) {
                return new Promise(function (resolve, reject) {
                    failedQueue.push({ resolve, reject });
                })
                    .then((token) => {
                        originalRequest.headers["Authorization"] = "Bearer " + token;
                        return apiClient(originalRequest);
                    })
                    .catch((err) => Promise.reject(err));
            }

            originalRequest._retry = true;
            isRefreshing = true;

            try {
                const newAccessToken = await refreshAccessToken();
                if (newAccessToken) {
                    processQueue(null, newAccessToken);
                    originalRequest.headers["Authorization"] = "Bearer " + newAccessToken;
                    return apiClient(originalRequest);
                } else {
                    processQueue("Refresh failed", null);
                    toast.error("Session expired. Please log in again.");
                    if (typeof window !== "undefined") {
                        Router.push("/");
                    }
                    return Promise.reject(error);
                }
            } catch (err) {
                processQueue(err, null);
                toast.error("Session expired. Please log in again.");
                if (typeof window !== "undefined") {
                    Router.push("/");
                }
                return Promise.reject(error);
            } finally {
                isRefreshing = false;
            }
        }

        // Other error handling (optional)
        if (error.response) {
            const { status, data } = error.response;
            switch (status) {
                case 403:
                    toast.error(`Forbidden! You don't have access to this resource. ${error.message}`);
                    break;
                case 404:
                    toast.error(`Resource not found. ${error.message}`);
                    break;
                case 500:
                    toast.error(`Server error! Please try again later. ${error.message}`);
                    break;
                default:
                    toast.error(`${data?.message || `Error ${status}: An error occurred.`} ${error.message}`);
            }
        } else if (error.request) {
            toast.error(`No response received from the server. Please check your network. ${error.message}`);
        } else {
            toast.error(`Error setting up the request: ${error.message}`);
        }
        return Promise.reject(error);
    }
);

// Generic API call function
export const apiCall = async <T>(
    url: string,
    method: "GET" | "POST" | "PATCH" | "PUT" | "DELETE",
    data?: any,
    config?: AxiosRequestConfig
): Promise<T> => {
    try {
        const response = await apiClient.request<T>({
            url,
            method,
            data,
            ...config,
        });
        if (response.status === 200 || response.status === 201) {
            return response.data;
        }
    } catch (error: any) {
        throw error;
    }
};

export default apiClient;