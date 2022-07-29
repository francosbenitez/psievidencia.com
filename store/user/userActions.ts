import { createAsyncThunk } from "@reduxjs/toolkit";
import UsersService from "../../services/UsersService";

export const registerUser = createAsyncThunk(
  "user/register",
  async (formData: any, { rejectWithValue }) => {
    try {
      const response = (await UsersService.register(formData)).data;
      localStorage.setItem("Token", response.token);
      return response;
    } catch (error) {
      // if (error.response && error.response.data.message) {
      //   return rejectWithValue(error.response.data.message);
      // } else {
      // return rejectWithValue(error.message);
      // }
      return rejectWithValue(error.response.data);
    }
  }
);

export const userLogin = createAsyncThunk(
  "user/login",
  async (formData: any, { rejectWithValue }) => {
    try {
      const response = (await UsersService.login(formData)).data;
      localStorage.setItem("Token", response.token);
      return response;
    } catch (error) {
      // if (error.response && error.response.data.message) {
      //   return rejectWithValue(error.response.data.message);
      // } else {
      //   return rejectWithValue(error.message);
      // }
      return rejectWithValue(error.response.data);
    }
  }
);
