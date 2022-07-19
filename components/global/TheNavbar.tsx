import React from "react";
import Link from "next/link";

const TheNavbar = () => {
  return (
    <div className="container mx-auto px-5 sm:px-0">
      <ul className="flex justify-end mt-5">
        <li className="p-2">
          <Link href="">
            <button className="rounded btn bg-white text-primary p-2 border border-primary">
              Ingresar
            </button>
          </Link>
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
