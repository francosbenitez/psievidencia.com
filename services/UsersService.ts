/* eslint-disable import/no-anonymous-default-export */
import Api from "./Api";

export default {
  create(form: any) {
    return Api().post("/suggestions/create", form);
  },
  contact(form: any) {
    return Api().post("/contact", form);
  },
  suggestions() {
    return Api().get("/suggestions");
  },
  register(form: any) {
    return Api().post("/register", form);
  },
  login(form: any) {
    return Api().post("/login", form);
  },
  logout() {
    return Api().post("/logout");
  },
  favorites() {
    return Api().get("/favorites");
  },
  favoritesCreate(psychologistId: any) {
    return Api().post(`favorites/${psychologistId}/create`);
  },
  favoritesDelete(psychologistId: any) {
    return Api().delete(`favorites/${psychologistId}/delete`);
  },
  verifyToken() {
    return Api().get("/verify-token");
  },
  resetPasswordStepOne(form: any) {
    return Api().post("/request-reset-email", form);
  },
  resetPasswordStepTwo(uidb64: any, token: string) {
    return Api().get(`/request-reset-email/${uidb64}/${token}`);
  },
  resetPasswordStepThree(form: any) {
    return Api().patch("password-reset-complete", form);
  },
};
