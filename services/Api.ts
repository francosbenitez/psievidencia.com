/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
// import { getToken } from "../utils/helper";
import { store } from "../store";

const API_URL = "https://secret-hamlet-81810.herokuapp.com/api/";

export default () => {
  // const token: string | null = typeof window !== "undefined" ? getToken() : "";

  const state = store.getState();
  const token =
    state.userReducer.userInfo != null
      ? state.userReducer.userInfo.token
      : null;

  const API = axios.create({
    baseURL: `${API_URL}`,
    headers: {
      Accept: "application/json",
      Authorization: token ? `Token ${token}` : "",
    },
  });

  return API;
};
