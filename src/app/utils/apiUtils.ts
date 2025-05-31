import { AppDispatch } from "../redux-store/store"; // Import the AppDispatch type
import { apiCallStarted, apiCallSucceeded, apiCallFailed } from "../redux-store/slices/apiSclice"; // Import Redux actions
import { apiCall } from "./api"; // Assuming `apiCall` is your generic API function

/**
 * Utility function to append query parameters to a URL.
 * @param url - The base URL.
 * @param params - An object containing query parameters.
 * @returns The URL with query parameters appended.
 */
const appendQueryParams = (url: string, params?: Record<string, any>): string => {
  if (!params) return url;
  const queryString = new URLSearchParams(params).toString();
  return `${url}?${queryString}`;
};

/**
 * Thunk to perform a GET request and track status for the specific model.
 * @param endpoint - The API endpoint.
 * @param model - The model name (e.g., "users", "organizations").
 * @param params - Query parameters to append to the URL.
 */
export const getApi = (endpoint: string, model: string, params?: Record<string, any>) => async (dispatch: AppDispatch) => {
  const url = appendQueryParams(endpoint, params);
  dispatch(apiCallStarted(model)); // Pass the model name to track status
  try {
    const response = await apiCall("GET", url);
    dispatch(apiCallSucceeded({ model, data: response })); // Pass the model and data to the reducer
    return response;
  } catch (error: any) {
    const errorResponse = { error: true, message: error.message || "Failed to fetch data" };
    dispatch(apiCallFailed({ model, error: errorResponse.message })); // Pass the model and error
    return errorResponse; // Return the error object
  }
};

/**
 * Thunk to perform a POST request and track status for the specific model.
 * @param endpoint - The API endpoint.
 * @param model - The model name (e.g., "users", "organizations").
 * @param data - The request body.
 */
export const postApi = (endpoint: string, model: string, data?: any) => async (dispatch: AppDispatch) => {
    dispatch(apiCallStarted(model)); // Pass the model name to track status
  try {
    const response = await apiCall(endpoint, "POST", data);
    dispatch(apiCallSucceeded({ model, data: response })); // Pass the model and data to the reducer
    return response;
  } catch (error: any) {
    const errorResponse = { error: true, message: error.message || "Failed to post data" };
    dispatch(apiCallFailed({ model, error: errorResponse.message })); // Pass the model and error
    return errorResponse; // Return the error object
  }
};

/**
 * Thunk to perform a PATCH request and track status for the specific model.
 * @param endpoint - The API endpoint.
 * @param model - The model name (e.g., "users", "organizations").
 * @param data - The request body.
 */
export const patchApi = (endpoint: string, model: string, data?: any) => async (dispatch: AppDispatch) => {
  dispatch(apiCallStarted(model)); // Pass the model name to track status
  try {
    const response = await apiCall(endpoint, "PATCH", data);
    dispatch(apiCallSucceeded({ model, data: response })); // Pass the model and data to the reducer
    return response;
  } catch (error: any) {
    const errorResponse = { error: true, message: error.message || "Failed to update data" };
    dispatch(apiCallFailed({ model, error: errorResponse.message })); // Pass the model and error
    return errorResponse; // Return the error object
  }
};

/**
 * Thunk to perform a DELETE request and track status for the specific model.
 * @param endpoint - The API endpoint.
 * @param model - The model name (e.g., "users", "organizations").
 * @param params - Query parameters to append to the URL.
 */
export const deleteApi = (endpoint: string, model: string, params?: Record<string, any>) => async (dispatch: AppDispatch) => {
  const url = appendQueryParams(endpoint, params);
  dispatch(apiCallStarted(model)); // Pass the model name to track status
  try {
    const response = await apiCall(url, "DELETE");
    dispatch(apiCallSucceeded({ model, data: response })); // Pass the model and data to the reducer
    return response;
  } catch (error: any) {
    const errorResponse = { error: true, message: error.message || "Failed to delete data" };
    dispatch(apiCallFailed({ model, error: errorResponse.message })); // Pass the model and error
    return errorResponse; // Return the error object
  }
};