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

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;