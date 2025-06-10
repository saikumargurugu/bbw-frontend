import { AppDispatch } from "@/app/redux-store/store";
import { getApi } from "@/app/utils/apiUtils";


export const fetchProducts = async (dispatch: AppDispatch) => {
  const response = dispatch(getApi("/shop/products/", 'products'));
  return response;
};

export const fetchBrands = async (dispatch: AppDispatch) => {
  const response = dispatch(getApi("/shop/brands/", 'brands'));
  return response;
};

export const fetchCategories = async (dispatch: AppDispatch) => {
  const response = dispatch(getApi("/shop/categories/", 'categories'));
  return response;
};
