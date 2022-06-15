/* eslint-disable import/no-anonymous-default-export */
import Api from "./Api";

export default {
  index(pageNumber, name, therapeutic_model, work_population, specialization) {
    return Api().get(`psychologists?page=${pageNumber}`, {
      params: {
        name: name,
        therapeutic_model: therapeutic_model,
        work_population: work_population,
        specialization: specialization,
      },
    });
  },
  specializations() {
    return Api().get("psychologists/specializations");
  },
};
