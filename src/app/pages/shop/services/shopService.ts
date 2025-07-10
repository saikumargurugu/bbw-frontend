import axios from "axios";

export const getApiBaseUrl=()=>{
  if (typeof window !== "undefined") {
    const localUrl = localStorage.getItem("backendApiUrl");
    if (localUrl) return localUrl;
  }
  return process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000/api";
}

const API_BASE_URL = getApiBaseUrl();

export const fetchProducts = async () => {
  const response = await axios.get(`${API_BASE_URL}/products`);
  return response.data;
};

export const fetchProductDetails = async (id: string) => {
  const response = await axios.get(`${API_BASE_URL}/products/${id}`);
  return response.data;
};