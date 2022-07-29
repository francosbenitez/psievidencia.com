import { createSlice } from "@reduxjs/toolkit";
import { registerUser, userLogin } from "./userActions";

const userToken =
  typeof window !== "undefined"
    ? localStorage.getItem("Token")
      ? localStorage.getItem("Token")
      : null
    : null;

const initialState = {
  loading: false,
  userInfo: null,
  userToken,
  error: null,
  success: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("Token");
      state.loading = false;
      state.userInfo = null;
      state.userToken = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // Login
    builder.addCase(userLogin.pending, (state) => {
      state.loading = true;
      state.error = null;
    }),
      builder.addCase(userLogin.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.userInfo = payload;
        state.userToken = payload.userToken;
      }),
      builder.addCase(userLogin.rejected, (state, { payload }: any) => {
        state.loading = false;
        state.error = payload;
      }),
      // Register
      builder.addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      }),
      builder.addCase(registerUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.success = true;
        state.userInfo = payload;
        state.userToken = payload.userToken;
      }),
      builder.addCase(registerUser.rejected, (state, { payload }: any) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
