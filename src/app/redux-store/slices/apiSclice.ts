import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ApiCallState {
  loading: boolean;
  success: boolean;
  error: string | null;
}

interface ApiState {
  models: Record<string, any>; // Store data dynamically for different models
  status: { [key: string]: ApiCallState }; // Track the status of each API call separately
}

const initialState: ApiState = {
  models: {}, // Initialize as an empty object for storing data
  status: {}, // Initialize as an empty object for tracking API call statuses
};

const apiSlice = createSlice({
  name: "api",
  initialState,
  reducers: {
    apiCallStarted(state, action: PayloadAction<string>) {
      const model = action.payload;

      // Ensure the status object for the model is initialized
      if (!state.status[model]) {
        state.status[model] = { loading: false, success: false, error: null };
      }

      // Set the loading state for the model
      state.status[model] = { loading: true, success: false, error: null };
    },
    apiCallSucceeded(state, action: PayloadAction<{ model: string; data: any }>) {
      const { model, data } = action.payload;

      // Store the data for the model
      state.models[model] = data;

      // Update the status for the model
      state.status[model] = { loading: false, success: true, error: null };
    },
    apiCallFailed(state, action: PayloadAction<{ model: string; error: string }>) {
      const { model, error } = action.payload;

      // Update the error state for the model
      state.status[model] = { loading: false, success: false, error };
    },
  },
});

export const { apiCallStarted, apiCallSucceeded, apiCallFailed } = apiSlice.actions;
export default apiSlice.reducer;