import React from "react";
import Link from "next/link";

const Error404 = () => {
  return (
    <div className="container min-h-screen w-11/12 mx-auto pt-20 pb-40">
      <p className="text-2xl text-center w-1/2 m-auto p-6 bg-white mb-6">
        <span className="text-3xl block mb-3">¡Lo sentimos!</span>
        La página que estás buscando no existe o no tenés permisos para acceder
        a ella.
      </p>
      <Link href="/">
        <button className="bg-primary text-white rounded p-2 border border-primary flex m-auto">
          ← Volver a la Home
        </button>
      </Link>
    </div>
  );
};

export default Error404;
