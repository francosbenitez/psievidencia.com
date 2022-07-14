/* eslint-disable import/no-anonymous-default-export */
import Api from "./Api";

export default {
  index(
    pageNumber: number,
    name: string | undefined,
    specialization: number[],
    therapeutic_model: number[],
    work_population: number[],
    education: string,
    gender_identity: string
  ) {
    return Api().get(`psychologists?page=${pageNumber}`, {
      params: {
        name: name,
        specialization: specialization,
        therapeutic_model: therapeutic_model,
        work_population: work_population,
        education: education,
        gender_identity: gender_identity,
      },
    });
  },
  lists(pageNumber: number, type: string, name: string | undefined) {
    return Api().get(`psychologists/${type}?page=${pageNumber}`, {
      params: {
        name: name,
      },
    });
  },
  detail(id: string | string[] | undefined) {
    return Api().get(`psychologists/${id}`);
  },
};
