export const getToken = () => {
  return localStorage.getItem("Token");
};

export const removeToken = () => {
  localStorage.removeItem("Token");
};

export const setToken = (val: any) => {
  localStorage.setItem("Token", val);
};
