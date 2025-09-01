import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ApiCallState {
  loading: boolean;
  success: boolean;
  error: boolean | string | null; // Can be a string for error messages
}

interface ApiState {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  models: Record<string, any>; // Store data dynamically for different models
  status: { [key: string]: ApiCallState }; // Track the status of each API call separately
}

const initialState: ApiState = {
  models: {
    layoutRoutes: {
      navLinks: [
        {
            "label": "Home",
            "href": "/"
        },
        {
            "label": "Club",
            "href": "/club"
        },
        {
            "label": "Services",
            "href": "/services"
        },
        {
            "label": "Academy",
            "href": "/academy"
        },
        {
            "label": "Court Hire",
            "href": "/court-hire"
        },
        {
            "label": "About Us",
            "href": "/about"
        },
        {
            "label": "Socials",
            "href": "/socials"
        },
        {
            "label": "Contact",
            "href": "/contact"
        },
        {
            "label": "Pro Shop",
            "href": "/pro_shop"
        },
        // {
        //     "label": "Sign In",
        //     "href": "/sign-up"
        // }
    ],
      fotterText: "© Badminton Brisbane. All rights reserved.",
    },
    products: [], 
    brands: [], 
    categories: [], 
    authUser: {}, 
    users: {}, 
  }, 
  status: {
    layoutRoutes: {
      loading: false,
      success: false,
      error: false,
  }, 
    products: {
      loading: false,
      success: false,
      error: false,
    },
    brands: {
      loading: false,
      success: false,
      error: false,
    },
    categories: {
      loading: false,
      success: false,
      error: false,
    },
    authUser: {
      loading: false,
      success: false,
      error: false,
    },
    users: {
      loading: false,
      success: false,
      error: false,
    },
}
};

const apiSlice = createSlice({
  name: "api",
  initialState,
  reducers: {
    apiCallStarted(state, action: PayloadAction<string>) {
      const model = action.payload;

      // Ensure the status object for the model is initialized
      if (!state.status[model]) {
        state.status[model] = { loading: false, success: false, error: false };
      }

      // Set the loading state for the model
      state.status[model] = { loading: true, success: false, error: null };
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    apiCallSucceeded(state, action: PayloadAction<{ model: string; data: any }>) {
      const { model, data } = action.payload;

      // Store the data for the model
      state.models[model] = data;

      // Update the status for the model
      state.status[model] = { loading: false, success: true, error: false };
    },
    apiCallFailed(state, action: PayloadAction<{ model: string; error: string }>) {
      const { model } = action.payload;
      state.models[model] = initialState.models[model] || {};
      state.status[model] = { loading: false, success: false, error: true };
    },
  },
});

export const { apiCallStarted, apiCallSucceeded, apiCallFailed } = apiSlice.actions;
export default apiSlice.reducer;