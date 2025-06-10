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

        console.log("Is Logged In:", isLoggedIn); // Debugging log
        console.log("Token:", token); // Debugging log

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

// Add a response interceptor to handle errors
apiClient.interceptors.response.use(
    <T>(response: AxiosResponse<T>) => response,
    (error: any) => {
        if (error.response) {
            const { status, data } = error.response;
            console.log("Response error:", status, data);

            switch (status) {
                case 401:
                    toast.error(`Unauthorized! Please log in again. ${error.message}`);
                    if (typeof window !== "undefined") {
                        Router.push("/");
                    }
                    break;
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
        console.log("API request URL:", url);
        const response = await apiClient.request<T>({
            url,
            method,
            data,
            ...config,
        });
        console.log("API response:", response);

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