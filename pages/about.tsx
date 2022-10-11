import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <div className="container min-h-screen w-11/12 mx-auto pt-20 pb-40">
      <h2 className="text-3xl text-center underline">Acerca</h2>
      <div className="text-2xl leading-normal mt-6 text-justify">
        <p className="mb-6">
          Psievidencia es un proyecto que surge con base en la necesidad de toda
          una comunidad —compuesta tanto por psicólogues, como por estudiantes y
          usuaries—, que busca reunir los servicios de la Psicoterapia Basada en
          Evidencia (PBE) en un solo lugar.
        </p>
        <p className="mb-6">
          Este proyecto es de código abierto, no posee ánimos de lucro y tampoco
          recibe financiamiento alguno por parte de ninguna institución.
        </p>
        <p className="mb-6">
          Para contactarnos, hacé{" "}
          <Link href="/contact">
            <a className="underline">click acá</a>
          </Link>
          . Para contribuir,{" "}
          <Link href="/collaborate">
            <a className="underline">acá</a>
          </Link>
          .
        </p>
        <p className="my-20 text-center">¡Mil gracias por leer!</p>
        <p>Atentamente,</p>
        <p>La Comunidad</p>
      </div>
    </div>
  );
};

export default About;
