import TheAccordion from "@/components/psychologists-detail/TheAccordion";
import React from "react";

const Collaborate = () => {
  return (
    <div className="container min-h-screen w-11/12 mx-auto pt-20 pb-40">
      <h2 className="text-3xl text-center underline">Colaborar</h2>
      <div className="text-2xl leading-normal mt-6">
        <p className="mb-6">¡Hola! ¿Cómo estás?</p>
        <p className="mb-6">
          Primero que nada, queríamos agradecerte por tu interés. Siempre
          estamos encantades de ayudar y recibir ayuda.
        </p>
        <p className="mb-6">
          Para colaborar con Psievidencia, existen diferentes opciones. Desplegá
          la/s que te resulte/n de mayor interés:
        </p>
        <ol>
          <li className="mb-6">
            <TheAccordion content={"content"} title={"Programación"} />
          </li>
          <li className="mb-6">
            <TheAccordion content={"content"} title={"Diseño"} />
          </li>
          <li className="mb-6">
            <TheAccordion content={"content"} title={"Cafecito"} />
          </li>
          <li className="mb-6">
            <TheAccordion content={"content"} title={"Feedback"} />
          </li>
        </ol>
        <p className="mb-6">
          Dicho eso, sea que puedas o no colaborar, queremos agradecerte
          igualmente tu visita.
        </p>
      </div>
    </div>
  );
};

export default Collaborate;
