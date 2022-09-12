import React, { useState } from "react";
import Head from "next/head";
import * as EditProfileComponents from "@/components/edit/profile";
import * as EditAccountComponents from "@/components/edit/account";
import SwitchComponents from "@/components/edit/SwitchComponents";

const Edit = () => {
  const ProfileComponents: Record<string, any> = EditProfileComponents;
  const AccountComponents: Record<string, any> = EditAccountComponents;

  const [activeComponent, setActiveComponent] = useState("profile");

  return (
    <>
      <Head>
        <title>Editá tus datos | Psievidencia</title>
      </Head>
      <div className="container min-h-screen w-11/12 mx-auto pt-20 pb-40">
        <h2 className="text-3xl">Editá tus datos</h2>
        <div className="flex">
          <div className="w-1/3">
            <ul>
              <li onClick={() => setActiveComponent("profile")}>Perfil</li>
              <li onClick={() => setActiveComponent("account")}>Cuenta</li>
            </ul>
          </div>

          <SwitchComponents active={activeComponent}>
            <form className="w-1/3" name="profile">
              {Object.keys(EditProfileComponents).map((item) => {
                const Item: any = ProfileComponents[item];
                return <Item key={item} />;
              })}
            </form>
            <form className="w-1/3" name="account">
              {Object.keys(EditAccountComponents).map((item) => {
                const Item: any = AccountComponents[item];
                return <Item key={item} />;
              })}
            </form>
          </SwitchComponents>
        </div>
      </div>
    </>
  );
};

export default Edit;
