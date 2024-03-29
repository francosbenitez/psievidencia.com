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
  role: null,
  isLoggedIn: false,
  userToken,
  error: null,
  success: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUsername: (state, { payload }) => {
      if (state.userInfo) {
        const userInfo: { user: { username: string } } = state.userInfo;
        userInfo.user.username = payload;
      }
    },
    logout: (state) => {
      localStorage.removeItem("Token");
      state.loading = false;
      state.userInfo = null;
      state.role = null;
      state.isLoggedIn = false;
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
        state.role = payload.user.role;
        state.userToken = payload.userToken;
        state.isLoggedIn = true;
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
      builder.addCase(registerUser.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      }),
      builder.addCase(registerUser.rejected, (state, { payload }: any) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const { logout, updateUsername } = userSlice.actions;
export default userSlice.reducer;
