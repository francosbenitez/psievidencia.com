/* eslint-disable import/no-anonymous-default-export */
import Api2 from "./Api2";

export default {
  create(form: any) {
    return Api2().post("/suggestions/create", form);
  },
  suggestions() {
    return Api2().get("/suggestions");
  },
};
