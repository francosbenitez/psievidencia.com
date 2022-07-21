/* eslint-disable import/no-anonymous-default-export */
import Api from "./Api";

export default {
  create(form: any) {
    return Api().post("/suggestions/create", form);
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
  favorites() {
    return Api().get("/favorites");
  },
};
