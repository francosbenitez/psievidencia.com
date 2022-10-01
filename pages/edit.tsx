import React, { useState, useEffect } from "react";
import Head from "next/head";
import * as EditProfileComponents from "@/components/edit/profile";
import * as EditAccountComponents from "@/components/edit/account";
import SwitchComponents from "@/components/edit/SwitchComponents";
import Account from "@/public/icons/account.svg";
import Profile from "@/public/icons/profile.svg";
import PsychologistsService from "@/services/PsychologistsService";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

import { EditGenderIdentity } from "@/components/edit/profile";

import ProfileInput from "@/components/edit/profile/ProfileInput";
import ProfileSelect from "@/components/edit/profile/ProfileSelect";

const Edit = () => {
  const ProfileComponents: Record<string, any> = EditProfileComponents;
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

  // const ProfileInput = ProfileComponents["ProfileInput"];

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
                    <ProfileSelect
                      selectedOptions={psychologist.therapeutic_models}
                      setForm={setForm}
                      dataToChange={"therapeutic_models"}
                      options={[
                        {
                          id: 1,
                          name: "Terapias Cognitivo Conductuales",
                        },
                        {
                          id: 2,
                          name: "ACT",
                        },
                        {
                          id: 3,
                          name: "DBT",
                        },
                        {
                          id: 4,
                          name: "Mindfulness",
                        },
                        {
                          id: 5,
                          name: "Análisis de la Conducta Aplicado",
                        },
                        {
                          id: 6,
                          name: "Terapias Sistémicas",
                        },
                        {
                          id: 7,
                          name: "FAP",
                        },
                      ]}
                      label={"Modelo terapéutico"}
                    />
                    <EditGenderIdentity
                      selectedGenderIdentity={psychologist.gender_identity}
                      setForm={setForm}
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
                <p className="italic my-3">
                  ¡Por ahora, la funcionalidad de editar los datos de la Cuenta
                  no está disponible! Disculpá las molestias.
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

export default Edit;
