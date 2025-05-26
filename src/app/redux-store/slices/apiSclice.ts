import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface ApiState {
    loading: boolean;
    success: boolean;
    error: string | null;
}

const initialState: ApiState = {
    loading: false,
    success: false,
    error: null,
};

// Generic async thunk for API calls
export const apiCall = createAsyncThunk(
    "api/call",
    async (
        { url, method, data }: { url: string; method: "GET" | "POST" | "PUT" | "DELETE"; data?: any },
        { rejectWithValue }
    ) => {
        try {
            const response = await axios({ url, method, data });
            return response.data; // Return the response data
        } catch (error: any) {
            return rejectWithValue(error.response?.data?.message || "Something went wrong");
        }
    }
);

const apiSlice = createSlice({
    name: "api",
    initialState,
    reducers: {
        resetApiState: (state) => {
            state.loading = false;
            state.success = false;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(apiCall.pending, (state) => {
                state.loading = true;
                state.success = false;
                state.error = null;
            })
            .addCase(apiCall.fulfilled, (state) => {
                state.loading = false;
                state.success = true;
                state.error = null;
            })
            .addCase(apiCall.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.success = false;
                state.error = action.payload;
            });
    },
});

export const { resetApiState } = apiSlice.actions;
export default apiSlice.reducer;