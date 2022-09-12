import React, { useState } from "react";
import Head from "next/head";
import * as EditProfileComponents from "@/components/edit/profile";
import * as EditAccountComponents from "@/components/edit/account";
import SwitchComponents from "@/components/edit/SwitchComponents";
import Account from "@/public/icons/account.svg";
import Profile from "@/public/icons/profile.svg";

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
          <ul className="w-1/3">
            <li
              onClick={() => setActiveComponent("profile")}
              className="cursor-pointer my-4"
            >
              <Profile className="inline" />{" "}
              <span className="align-middle">Perfil</span>
            </li>
            <li
              onClick={() => setActiveComponent("account")}
              className="cursor-pointer my-4"
            >
              <Account className="inline" />{" "}
              <span className="align-middle">Cuenta</span>
            </li>
          </ul>

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
