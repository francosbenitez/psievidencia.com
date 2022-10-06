import React, { useState, useEffect } from "react";
import Head from "next/head";
import SwitchComponents from "@/components/edit/SwitchComponents";
import Account from "@/public/icons/account.svg";
import Profile from "@/public/icons/profile.svg";
import PsychologistsService from "@/services/PsychologistsService";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

import ProfileInput from "@/components/edit/profile/ProfileInput";
import ProfileSelectMultiple from "@/components/edit/profile/ProfileSelectMultiple";
import ProfileSelect from "@/components/edit/profile/ProfileSelect";

import { TM, WM, WP, GI, ED, BO, RT } from "@/utils/constants";

import ProfilePassword from "@/components/edit/profile/ProfilePassword";

const Edit = () => {
  const [psychologist, setPsychologist] = useState<Record<string, any>>();

  const [form, setForm] = useState({});

  const { role } = useSelector((state: any) => state.userReducer);

  const [activeComponent, setActiveComponent] = useState("profile");

  useEffect(() => {
    (async () => {
      try {
        const response = (await PsychologistsService.profile()).data;
        setPsychologist(response.data);
      } catch (err) {
        console.log("err", err);
      }
    })();
  }, []);

  const updatePsychologist = async () => {
    try {
      if (Object.keys(form).length > 0) {
        const response = (await PsychologistsService.edit(form)).data;
        setPsychologist(response.data);
      }
    } catch (err) {
      console.log("err", err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const promise = updatePsychologist();

    toast.promise(promise, {
      loading: "Actualizando datos...",
      success: "¡Datos actualizados!",
      error: "Mil disculpas. Hubo un error actualizando tus datos",
    });
  };

  return (
    <>
      <Head>
        <title>Editá tus datos | Psievidencia</title>
      </Head>
      <div className="container min-h-screen w-11/12 mx-auto pt-20 pb-40">
        {psychologist != null && Object.keys(psychologist).length > 0 && (
          <>
            <h2 className="text-3xl">Editá tus datos</h2>
            <div className="block md:flex">
              <ul className="w-full md:w-1/4 flex md:block">
                <li
                  onClick={() => {
                    setActiveComponent("profile"), setForm({});
                  }}
                  className="cursor-pointer my-4"
                >
                  <div
                    className={`inline p-2 rounded-xl ${
                      activeComponent === "profile" ? "bg-white" : ""
                    }`}
                  >
                    <Profile className="inline" />{" "}
                    <span className="align-middle">Perfil</span>
                  </div>
                </li>
                <li
                  onClick={() => {
                    setActiveComponent("account"), setForm({});
                  }}
                  className="cursor-pointer my-4"
                >
                  <div
                    className={`inline p-2 rounded-xl ${
                      activeComponent === "account" ? "bg-white" : ""
                    }`}
                  >
                    <Account className="inline" />{" "}
                    <span className="align-middle">Cuenta</span>
                  </div>
                </li>
              </ul>

              <SwitchComponents active={activeComponent}>
                <form
                  key={1}
                  className="w-3/4"
                  name="profile"
                  onSubmit={(e) => e.preventDefault()}
                >
                  {role !== "AUTHENTICATED" ? (
                    <>
                      {/* Nombre y Apellido */}
                      <ProfileInput
                        selectedName={psychologist.name}
                        setForm={setForm}
                        label={"Nombre y Apellido"}
                        dataToChange={"name"}
                      />

                      {/* Identidad de Género */}
                      <ProfileSelect
                        selectedOption={GI.filter(
                          (option: any) =>
                            option.slug === psychologist.gender_identity
                        )}
                        setForm={setForm}
                        label={"Identidad de Género"}
                        options={GI}
                        dataToChange={"gender_identity"}
                      />

                      {/* Tipo de Matrícula */}
                      <ProfileSelect
                        selectedOption={RT.filter(
                          (option: any) =>
                            option.name === psychologist.registration_type
                        )}
                        setForm={setForm}
                        label={"Tipo de Matrícula"}
                        options={RT}
                        dataToChange={"registration_type"}
                      />

                      {/* Número de Matrícula (en caso de tener MN y MP, poner ambas en ese orden) */}
                      <ProfileInput
                        selectedName={psychologist.registration_number}
                        setForm={setForm}
                        label={
                          "Número de Matrícula (en caso de tener MN y MP, poner ambas en ese orden)"
                        }
                        dataToChange={"registration_number"}
                      />

                      {/* Añada el nombre de la institución o servicio en salud mental en caso de formar parte */}
                      <ProfileInput
                        selectedName={psychologist.institution}
                        setForm={setForm}
                        label={
                          "Añada el nombre de la institución o servicio en salud mental en caso de formar parte"
                        }
                        dataToChange={"institution"}
                      />

                      {/* ¿Integra un equipo de salud con Médicx Psiquiatra?
                       */}
                      <ProfileSelect
                        selectedOption={BO.filter(
                          (option: any) => option.slug === psychologist.team
                        )}
                        setForm={setForm}
                        label={
                          "¿Integra un equipo de salud con Médicx Psiquiatra?"
                        }
                        options={BO}
                        dataToChange={"team"}
                      />

                      {/* Jurisdicción */}
                      <ProfileSelect
                        selectedOption={psychologist.province}
                        setForm={setForm}
                        label={"Jurisdicción"}
                        options={"provinces"}
                        dataToChange={"province"}
                      />

                      {/* Acá podes especificar la localidad dentro de la provincia donde ejerces */}
                      <ProfileInput
                        selectedName={psychologist.city}
                        setForm={setForm}
                        label={
                          "Acá podes especificar la localidad dentro de la provincia donde ejerces"
                        }
                        dataToChange={"city"}
                      />

                      {/* Mayor grado académico alcanzado */}
                      <ProfileSelect
                        selectedOption={ED.filter(
                          (option: any) =>
                            option.slug === psychologist.education
                        )}
                        setForm={setForm}
                        label={"Mayor grado académico alcanzado"}
                        options={ED}
                        dataToChange={"education"}
                      />

                      {/* ¿En cuáles de estos modelos terapéuticos acredita formación? */}
                      <ProfileSelectMultiple
                        selectedOptions={psychologist.therapeutic_models}
                        setForm={setForm}
                        dataToChange={"therapeutic_models"}
                        options={TM}
                        label={"Modelo terapéutico"}
                      />

                      {/* Formación en Perspectiva de Género/LGBTIQ+ */}
                      <ProfileSelect
                        selectedOption={BO.filter(
                          (option: any) =>
                            option.slug === psychologist.gender_perspective
                        )}
                        setForm={setForm}
                        label={"Formación en Perspectiva de Género/LGBTIQ+"}
                        options={BO}
                        dataToChange={"gender_perspective"}
                      />

                      {/* Otras formaciones realizadas que puedan ayudar a especificar tu perfil profesional */}
                      <ProfileSelectMultiple
                        selectedOptions={psychologist.specializations}
                        setForm={setForm}
                        dataToChange={"specializations"}
                        options={"specializations"}
                        label={
                          "Otras formaciones realizadas que puedan ayudar a especificar tu perfil profesional"
                        }
                      />

                      {/* Población de trabajo */}
                      <ProfileSelectMultiple
                        selectedOptions={psychologist.work_populations}
                        setForm={setForm}
                        dataToChange={"work_populations"}
                        options={WP}
                        label={"Población de trabajo"}
                      />

                      {/* Modalidad de Trabajo */}
                      <ProfileSelectMultiple
                        selectedOptions={psychologist.work_modalities}
                        setForm={setForm}
                        dataToChange={"work_modalities"}
                        options={WM}
                        label={"Modalidad de Trabajo"}
                      />

                      {/* Atención on-line */}
                      <ProfileSelect
                        selectedOption={BO.filter(
                          (option: any) => option.slug === psychologist.online
                        )}
                        setForm={setForm}
                        label={"Atención on-line"}
                        options={BO}
                        dataToChange={"online"}
                      />

                      {/* ¿Trabaja con Obras Sociales / Prepagas? */}
                      <ProfileSelect
                        selectedOption={BO.filter(
                          (option: any) => option.slug === psychologist.prepaid
                        )}
                        setForm={setForm}
                        label={"¿Trabaja con Obras Sociales / Prepagas?"}
                        options={BO}
                        dataToChange={"prepaid"}
                      />

                      {/* Especificar cuáles */}
                      <ProfileInput
                        selectedName={psychologist.prepaid_type}
                        setForm={setForm}
                        label={"Tipo de Obra Social/Prepaga"}
                        dataToChange={"prepaid_type"}
                      />

                      {/* ¿Facturás para realizar el reintegro en las Obras Sociales / Prepagas? */}
                      <ProfileSelect
                        selectedOption={BO.filter(
                          (option: any) => option.slug === psychologist.invoice
                        )}
                        setForm={setForm}
                        label={
                          "¿Facturás para realizar el reintegro en las Obras Sociales / Prepagas?"
                        }
                        options={BO}
                        dataToChange={"invoice"}
                      />

                      {/* ¿Utiliza Lengua de Señas? (manejo fluido para una sesión) */}
                      <ProfileSelect
                        selectedOption={BO.filter(
                          (option: any) =>
                            option.slug === psychologist.sign_language
                        )}
                        setForm={setForm}
                        label={
                          "¿Utiliza Lengua de Señas? (manejo fluido para una sesión)"
                        }
                        options={BO}
                        dataToChange={"sign_language"}
                      />

                      {/* Además de Español, ¿tiene manejo de otro/s idioma/s fluido/s para una sesión? */}
                      <ProfileInput
                        selectedName={psychologist.session_languages}
                        setForm={setForm}
                        label={
                          "Además de Español, ¿tiene manejo de otro/s idioma/s fluido/s para una sesión?"
                        }
                        dataToChange={"session_languages"}
                      />

                      {/* Redes Sociales */}
                      <ProfileInput
                        selectedName={psychologist.social_networks}
                        setForm={setForm}
                        label={"Redes Sociales"}
                        dataToChange={"social_networks"}
                      />

                      {/* Número o Mail de contacto */}
                      <ProfileInput
                        selectedName={psychologist.phone_number}
                        setForm={setForm}
                        label={"Número o Mail de contacto"}
                        dataToChange={"phone_number"}
                      />

                      {/* Algún dato que quieras añadir y no se haya contemplado previamente en el cuestionario */}
                      <ProfileInput
                        selectedName={psychologist.additional_data}
                        setForm={setForm}
                        label={
                          "Algún dato que quieras añadir y no se haya contemplado previamente en el cuestionario"
                        }
                        dataToChange={"additional_data"}
                      />
                    </>
                  ) : (
                    <ProfileInput
                      selectedName={psychologist.name}
                      setForm={setForm}
                      label={"Nombre y Apellido"}
                      dataToChange={"name"}
                    />
                  )}
                  <button
                    className="rounded bg-primary text-white p-2 border-white"
                    onClick={handleSubmit}
                  >
                    Guardar
                  </button>
                </form>
                <form
                  key={2}
                  className="w-3/4"
                  name="account"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <ProfileInput
                    selectedName={psychologist.username}
                    setForm={setForm}
                    label={"Usuario"}
                    dataToChange={"username"}
                  />

                  <ProfilePassword />

                  <ProfileInput
                    disabled={true}
                    selectedName={psychologist.email}
                    setForm={setForm}
                    label={"Email"}
                    dataToChange={"email"}
                  />

                  <p className="my-3">
                    Contactá con{" "}
                    <a
                      href="mailto:hola@psievidencia.com"
                      className="font-bold underline"
                    >
                      soporte
                    </a>{" "}
                    para modificar tu email
                  </p>

                  <button
                    className="rounded bg-primary text-white p-2 border-white"
                    onClick={handleSubmit}
                  >
                    Guardar
                  </button>
                </form>
              </SwitchComponents>
            </div>
          </>
        )}
      </div>
      <Toaster position="bottom-right" reverseOrder={false} />
    </>
  );
};

export default Edit;
