import React from "react";
import Link from "next/link";
import TheModal from "./TheModal";
import TheLogin from "./TheLogin";
import LoginBtn from "./LoginBtn";
import RegisterBtn from "./RegisterBtn";
import TheRegister from "./TheRegister";

const TheNavbar = () => {
  return (
    <div className="container mx-auto px-5 sm:px-0">
      <ul className="flex justify-end mt-5">
        {/* if logged ? ['Ingresar', 'Registrarse'] : ['Mis favoritos' 'Salir'] */}
        <li className="p-2 flex">
          <Link href="/favorites">
            <p className="self-center underline">Mis favoritos</p>
          </Link>
        </li>
        <li className="p-2">
          <TheModal
            button={<LoginBtn />}
            title={"Ingresar"}
            content={<TheLogin />}
          />
        </li>
        <li className="p-2">
          <TheModal
            button={<RegisterBtn />}
            title={"Registrarse"}
            content={<TheRegister />}
          />
        </li>
      </ul>
    </div>
  );
};

export default TheNavbar;
