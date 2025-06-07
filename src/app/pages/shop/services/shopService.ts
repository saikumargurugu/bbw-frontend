import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000/api";

export const fetchProducts = async () => {
  const response = await axios.get(`${API_BASE_URL}/products`);
  return response.data;
};

export const fetchProductDetails = async (id: string) => {
  const response = await axios.get(`${API_BASE_URL}/products/${id}`);
  return response.data;
};