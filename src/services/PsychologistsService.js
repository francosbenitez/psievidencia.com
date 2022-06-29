/* eslint-disable import/no-anonymous-default-export */
import Api from "./Api";

export default {
  index(pageNumber, name, specialization, therapeutic_model, work_population) {
    return Api().get(`psychologists?page=${pageNumber}`, {
      params: {
        name: name,
        specialization: specialization,
        therapeutic_model: therapeutic_model,
        work_population: work_population,
      },
    });
  },
  specializations(pageNumber) {
    return Api().get(`psychologists/specializations?page=${pageNumber}`);
  },
  therapeuticModels(pageNumber) {
    return Api().get(`psychologists/therapeutic_models?page=${pageNumber}`);
  },
  detail(id) {
    return Api().get(`psychologists/${id}`);
  },
};
