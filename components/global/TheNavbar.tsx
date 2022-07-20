import React, { useState } from "react";
import Link from "next/link";
import TheModal from "./TheModal";
import TheLogin from "./TheLogin";
import LoginBtn from "./LoginBtn";

const TheNavbar = () => {
  const [show, setShow] = useState<boolean>(false);

  const showModal = () => {
    setShow(!show);
  };

  return (
    <div className="container mx-auto px-5 sm:px-0">
      <ul className="flex justify-end mt-5">
        {/* if logged ? ['Ingresar', 'Registrarse'] : ['Mis favoritos' 'Salir'] */}
        <li className="p-2">
          <TheModal
            button={<LoginBtn showModal={showModal} />}
            title={"Ingresar"}
            content={<TheLogin />}
            showModal={showModal}
            show={show}
          />
        </li>
        <li className="p-2">
          <Link href="">
            <button className="rounded btn bg-primary text-white p-2 border-white">
              Registrarse
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default TheNavbar;
