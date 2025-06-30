import { AppDispatch } from "@/app/redux-store/store";
import { getApi } from "@/app/utils/apiUtils";


export const fetchLayoutRoutes = async (dispatch: AppDispatch) => {
  const response = dispatch(getApi("/user/layout_routes/", 'layoutRoutes'));
  return response;
};
