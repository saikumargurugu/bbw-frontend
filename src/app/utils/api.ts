import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

// Backend base URL from environment variables
const backendBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000/api";

// Create an Axios instance with default configuration
const apiClient = axios.create({
    baseURL: backendBaseUrl, // Use the backend base URL
    timeout: 5000, // Request timeout in milliseconds
    headers: {
        "Content-Type": "application/json",
    },
});

// Add a request interceptor
apiClient.interceptors.request.use(
    (config) => {
        // Add authorization token if available
        const token = localStorage.getItem("authToken");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        console.error("Request error:", error.message || error);
        return Promise.reject(error);
    }
);

// Add a response interceptor
apiClient.interceptors.response.use(
    <T>(response: AxiosResponse<T>) => response,
    (error: any) => {
        if (error.response) {
            const { status, data } = error.response;

            switch (status) {
                case 401:
                    console.error("Unauthorized! Redirecting to login...");
                    // Optionally, redirect to login page
                    // window.location.href = "/login";
                    break;
                case 403:
                    console.error("Forbidden! You don't have access to this resource.");
                    break;
                case 404:
                    console.error("Resource not found.");
                    break;
                case 500:
                    console.error("Server error! Please try again later.");
                    break;
                default:
                    console.error(`Error ${status}:`, data?.message || "An error occurred.");
            }
        } else if (error.request) {
            console.error("No response received from the server. Please check your network.");
        } else {
            console.error("Error setting up the request:", error.message);
        }
        return Promise.reject(error);
    }
);

// Generic API call function
export const apiCall = async <T>(
    url: string,
    method: "GET" | "POST" | "PUT" | "DELETE",
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
        return response.data;
    } catch (error: any) {
        throw error.response?.data?.message || error.message || "Something went wrong";
    }
};

export default apiClient;