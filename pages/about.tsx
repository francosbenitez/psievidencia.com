import React from "react";
import Link from "next/link";
import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>Acerca | Psievidencia</title>
      </Head>
      <div className="container min-h-screen w-11/12 mx-auto pt-20 pb-40">
        <h2 className="text-3xl text-center underline">Acerca</h2>
        <div className="text-xl leading-normal mt-6">
          <p className="mb-6">
            Psievidencia es un proyecto que surge con base en la necesidad de
            toda una comunidad —compuesta por psicólogues, estudiantes y
            usuaries—, que busca reunir los servicios de la Psicoterapia Basada
            en Evidencia (PBE) en un solo lugar.
          </p>
          <p className="mb-6">
            Este proyecto es de código abierto, no posee ánimos de lucro y
            tampoco recibe financiamiento alguno por parte de ninguna
            institución.
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
        </div>
      </div>
    </>
  );
};

export default About;
