/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

const API_URL = "https://secret-hamlet-81810.herokuapp.com/api/";

export default () => {
  const API = axios.create({
    baseURL: `${API_URL}`,
    headers: {
      Accept: "application/json",
    },
  });

  return API;
};
