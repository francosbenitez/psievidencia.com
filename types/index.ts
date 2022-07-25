export type Psychologist = {
  additional_data: string;
  city: string;
  date: string;
  education: string;
  email: string;
  gender: string;
  gender_perspective: string;
  id: number;
  institution: string;
  invoice: string;
  name: string;
  name_2: string;
  online: string;
  phone_number: string;
  prepaid: string;
  prepaid_type: string;
  province: string;
  registration_number: string;
  registration_type: string;
  session_languages: string;
  sign_language: string;
  social_networks: string;
  specialization: string;
  team: string;
  therapeutic_model: string;
  work_modality: string;
  work_population: string;
  liked: boolean;
};

export type Data = {
  id: number;
  name: string;
  slug?: string;
};
