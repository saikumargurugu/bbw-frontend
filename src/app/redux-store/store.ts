import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSclice";
import apiReducer from "./slices/apiSclice";

const store = configureStore({
    reducer: {
        user: userReducer,
        api: apiReducer, // Add the API slice here
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as Record<string, any>, // Explicitly type the reducer object
    // No need to explicitly add redux-thunk; it's included by default
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;