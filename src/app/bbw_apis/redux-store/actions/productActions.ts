import { AppDispatch } from "@/app/redux-store/store";
import { getApi } from "@/app/utils/apiUtils";

// page: number, filters: object
export const fetchProducts = async (
  dispatch: AppDispatch,
  page: { page: number } = { page: 1 },
  filters: Record<string, any> = {}
) => {
  const params: Record<string, any> = {
    page: page.page || 1,
    filters: JSON.stringify(filters),
  };
  
  const response = dispatch(getApi("public/shop/products/", "products", params));
  return response;
};

export const fetchBrands = async (dispatch: AppDispatch) => {
  const response = dispatch(getApi("public/shop/brands/", "brands"));
  return response;
};

export const fetchCategories = async (dispatch: AppDispatch) => {
  const response = dispatch(getApi("public/shop/categories/", "categories"));
  return response;
};
