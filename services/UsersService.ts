/* eslint-disable import/no-anonymous-default-export */
import Api from "./Api";

export default {
  create(form: any) {
    return Api().post("/suggestions", form);
  },
};
