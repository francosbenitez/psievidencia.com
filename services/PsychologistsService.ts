/* eslint-disable import/no-anonymous-default-export */
import Api from "./Api";

export default {
  index(
    pageNumber: number,
    name: string | undefined,
    specialization: number[],
    therapeutic_model: number[],
    work_population: number[],
    work_modality: number[],
    education: string,
    province: string,
    gender_identity: string,
    has_perspective: string | undefined,
    has_prepaid: string | undefined
  ) {
    return Api().get(`psychologists?page=${pageNumber}`, {
      params: {
        name: name,
        specialization: specialization,
        therapeutic_model: therapeutic_model,
        work_population: work_population,
        work_modality: work_modality,
        education: education,
        province: province,
        gender_identity: gender_identity,
        has_perspective: has_perspective,
        has_prepaid: has_prepaid,
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
  profile() {
    return Api().get("profile");
  },
  edit(form: any) {
    return Api().patch("psychologists/edit", form);
  },
};
