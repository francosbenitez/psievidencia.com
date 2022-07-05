/* eslint-disable import/no-anonymous-default-export */
import Api from "./Api";

export default {
  index(
    pageNumber,
    name,
    specialization,
    therapeutic_model,
    work_population,
    education
  ) {
    return Api().get(`psychologists?page=${pageNumber}`, {
      params: {
        name: name,
        specialization: specialization,
        therapeutic_model: therapeutic_model,
        work_population: work_population,
        education: education,
      },
    });
  },
  lists(pageNumber, type) {
    return Api().get(`psychologists/${type}?page=${pageNumber}`);
  },
  detail(id) {
    return Api().get(`psychologists/${id}`);
  },
};
