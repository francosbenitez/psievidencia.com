import React, { useState, useEffect } from "react";
import Head from "next/head";
import * as EditAccountComponents from "@/components/edit/account";
import SwitchComponents from "@/components/edit/SwitchComponents";
import Account from "@/public/icons/account.svg";
import Profile from "@/public/icons/profile.svg";
import PsychologistsService from "@/services/PsychologistsService";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

import ProfileInput from "@/components/edit/profile/ProfileInput";
import ProfileSelectMultiple from "@/components/edit/profile/ProfileSelectMultiple";
import ProfileSelect from "@/components/edit/profile/ProfileSelect";

import { TM, WM, WP, GI, ED } from "@/utils/constants";
import { GetServerSideProps } from "next";
import { Provinces } from "@/types";

const Edit = ({ provinces }: { provinces: Provinces[] }) => {
  const AccountComponents: Record<string, any> = EditAccountComponents;
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
    const promesa = updatePsychologist();

    toast.promise(promesa, {
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
      {psychologist != null && Object.keys(psychologist).length > 0 && (
        <div className="container min-h-screen w-11/12 mx-auto pt-20 pb-40">
          <h2 className="text-3xl">Editá tus datos</h2>
          <div className="block md:flex">
            <ul className="w-full md:w-1/4 flex md:block">
              <li
                onClick={() => setActiveComponent("profile")}
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
                onClick={() => setActiveComponent("account")}
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
                className="w-3/4"
                name="profile"
                onSubmit={(e) => e.preventDefault()}
              >
                {role !== "AUTHENTICATED" ? (
                  <>
                    <ProfileInput
                      selectedName={psychologist.additional_data}
                      setForm={setForm}
                      label={"Datos adicionales"}
                      dataToChange={"additional_data"}
                    />
                    <ProfileInput
                      selectedName={psychologist.social_networks}
                      setForm={setForm}
                      label={"Redes sociales"}
                      dataToChange={"social_networks"}
                    />
                    <ProfileInput
                      selectedName={psychologist.name}
                      setForm={setForm}
                      label={"Nombre"}
                      dataToChange={"name"}
                    />
                    <ProfileInput
                      selectedName={psychologist.city}
                      setForm={setForm}
                      label={"Ciudad"}
                      dataToChange={"city"}
                    />
                    <ProfileInput
                      selectedName={psychologist.registration_number}
                      setForm={setForm}
                      label={"Número de matrícula"}
                      dataToChange={"registration_number"}
                    />
                    <ProfileSelectMultiple
                      selectedOptions={psychologist.therapeutic_models}
                      setForm={setForm}
                      dataToChange={"therapeutic_models"}
                      options={TM}
                      label={"Modelo terapéutico"}
                    />
                    <ProfileSelectMultiple
                      selectedOptions={psychologist.work_modalities}
                      setForm={setForm}
                      dataToChange={"work_modalities"}
                      options={WM}
                      label={"Modalidades de trabajo"}
                    />
                    <ProfileSelectMultiple
                      selectedOptions={psychologist.work_populations}
                      setForm={setForm}
                      dataToChange={"work_populations"}
                      options={WP}
                      label={"Poblaciones de trabajo"}
                    />
                    <ProfileSelect
                      selectedOption={provinces.filter(
                        (option: any) => option.slug === psychologist.province
                      )}
                      setForm={setForm}
                      label={"Provincia"}
                      options={provinces}
                      dataToChange={"province"}
                    />
                    <ProfileSelect
                      selectedOption={GI.filter(
                        (option: any) =>
                          option.slug === psychologist.gender_identity
                      )}
                      setForm={setForm}
                      label={"Identidad de género"}
                      options={GI}
                      dataToChange={"gender_identity"}
                    />
                    <ProfileSelect
                      selectedOption={ED.filter(
                        (option: any) => option.slug === psychologist.education
                      )}
                      setForm={setForm}
                      label={"Educación"}
                      options={ED}
                      dataToChange={"education"}
                    />
                  </>
                ) : (
                  <ProfileInput
                    selectedName={psychologist.name}
                    setForm={setForm}
                    label={"Nombre"}
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
                className="w-3/4"
                name="account"
                onSubmit={(e) => e.preventDefault()}
              >
                {Object.keys(EditAccountComponents).map((item) => {
                  const Item: any = AccountComponents[item];
                  return (
                    <Item
                      key={item}
                      selectedUsername={psychologist.username}
                      selectedEmail={psychologist.email}
                      setForm={setForm}
                    />
                  );
                })}
                <p className="my-3 italic">
                  Por ahora, la funcionalidad de editar los datos de la Cuenta
                  no está disponible. Disculpá las molestias.
                </p>
                <button
                  className="opacity-50 rounded bg-primary text-white p-2 border-white"
                  onClick={handleSubmit}
                  disabled
                >
                  Guardar
                </button>
              </form>
            </SwitchComponents>
          </div>
        </div>
      )}
      <Toaster position="bottom-right" reverseOrder={false} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const response = (await PsychologistsService.lists(1, "provinces")).data;
  const provinces = response.results;
  return {
    props: { provinces },
  };
};

export default Edit;
