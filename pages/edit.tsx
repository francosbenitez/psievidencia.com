import React, { useState, useEffect } from "react";
import Head from "next/head";
import * as EditProfileComponents from "@/components/edit/profile";
import * as EditAccountComponents from "@/components/edit/account";
import SwitchComponents from "@/components/edit/SwitchComponents";
import Account from "@/public/icons/account.svg";
import Profile from "@/public/icons/profile.svg";
import PsychologistsService from "@/services/PsychologistsService";

const Edit = () => {
  const ProfileComponents: Record<string, any> = EditProfileComponents;
  const AccountComponents: Record<string, any> = EditAccountComponents;
  const [psychologist, setPsychologist] = useState<Record<string, any>>();

  const [form, setForm] = useState({});

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (Object.keys(form).length > 0) {
        const response = (await PsychologistsService.edit(form)).data;
        setPsychologist(response.data);
      }
    } catch (err) {
      console.log("err", err);
    }
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
                {Object.keys(EditProfileComponents).map((item) => {
                  const Item: any = ProfileComponents[item];
                  return (
                    <Item
                      key={item}
                      selectedName={psychologist.name}
                      selectedGenderIdentity={psychologist.gender_identity}
                      selectedTM={psychologist.therapeutic_models}
                      setForm={setForm}
                    />
                  );
                })}
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
                  return <Item key={item} />;
                })}
              </form>
            </SwitchComponents>
          </div>
        </div>
      )}
    </>
  );
};

export default Edit;
