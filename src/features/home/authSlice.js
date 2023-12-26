import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
  cookies: {
    accessToken: null,
    refreshToken: null,
  },
  loggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthDetails: (state, action) => {
      state.email = action.payload.email;
      state.cookies = action.payload.cookies;
    },
  },
});

export const { setAuthDetails } = authSlice.actions;
export default authSlice.reducer;
