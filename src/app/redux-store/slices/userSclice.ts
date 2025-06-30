import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
    username: string;
    email: string;
    isAuthenticated: boolean;
}

const initialState: UserState = {
    username: "",
    email: "",
    isAuthenticated: false,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<{ username: string; email: string }>) => {
            state.username = action.payload.username;
            state.email = action.payload.email;
            state.isAuthenticated = true;
        },
        clearUser: (state) => {
            state.username = "";
            state.email = "";
            state.isAuthenticated = false;
        },
    },
});

interface APIState {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const apiInitialState: APIState = {
  data: null,
  status: "idle",
  error: null,
};

const apiSlice = createSlice({
  name: "api",
  initialState: apiInitialState,
  reducers: {
    apiCallStarted(state) {
      state.status = "loading";
      state.error = null;
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    apiCallSucceeded(state, action: PayloadAction<any>) {
      state.status = "succeeded";
      state.data = action.payload;
    },
    apiCallFailed(state, action: PayloadAction<string>) {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export const { apiCallStarted, apiCallSucceeded, apiCallFailed } = apiSlice.actions;

const rootReducer = { user: userSlice.reducer, api: apiSlice.reducer };
export default rootReducer;