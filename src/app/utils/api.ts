import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Router from "next/router";
// Backend base URL from environment variables
const backendBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000/api";

// Create an Axios instance with default configuration
const apiClient = axios.create({
    baseURL: backendBaseUrl,
    timeout: 30000,
    headers: {
        "Content-Type": "application/json",
    },
});

// Add a request interceptor to include the token from local storage
apiClient.interceptors.request.use(
    (config) => {
        const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn") || "false");
        const token = localStorage.getItem("token");

        if (isLoggedIn && token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        console.error("Request error:", error.message || error);
        return Promise.reject(error);
    }
);

// Token refresh function
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

// Add a response interceptor to handle errors
apiClient.interceptors.response.use(
    <T>(response: AxiosResponse<T>) => response,
    async (error: any) => {
        const originalRequest = error.config;

        if (
            error.response &&
            error.response.status === 401 &&
            !originalRequest._retry
        ) {
            originalRequest._retry = true;
            const newAccessToken = await refreshAccessToken();
            if (newAccessToken) {
                originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
                return apiClient(originalRequest);
            } else {
                toast.error("Session expired. Please log in again.");
                if (typeof window !== "undefined") {
                    Router.push("/");
                }
                return Promise.reject(error);
            }
        }

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
            // toast.success("Request successful!");
            return response.data;
        }
    } catch (error: any) {
        // toast.error(`${error.response?.data?.message || "Something went wrong"} ${error.message}`);
        throw error;
    }
};

export default apiClient;