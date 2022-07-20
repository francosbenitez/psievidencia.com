/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
import { getToken } from "../utils/helper";

const API_URL = "https://secret-hamlet-81810.herokuapp.com/api/";

const token: string | null = typeof window !== "undefined" ? getToken() : "";

export default () => {
  const API = axios.create({
    baseURL: `${API_URL}`,
    headers: {
      Accept: "application/json",
      Authorization: token ? `Token ${token}` : "",
    },
  });

  return API;
};
