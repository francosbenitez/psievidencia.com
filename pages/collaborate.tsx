import React from "react";
import Link from "next/link";

const Collaborate = () => {
  return (
    <div className="container min-h-screen w-11/12 mx-auto pt-20 pb-40">
      <h2 className="text-3xl text-center underline">Colaborar</h2>
      <div className="text-xl leading-normal mt-6">
        <p className="mb-6">¡Hola! ¿Cómo estás?</p>
        <p className="mb-6">
          Primero que nada, queríamos agradecerte por tu interés. Siempre
          estamos encantades de ayudar y recibir ayuda.
        </p>
        <p className="mb-6">
          Para colaborar con Psievidencia, existen diferentes opciones:
        </p>
        <ol>
          <li className="mb-6">
            <span className="font-bold">Programación</span>
            <p>
              En esta área podés colaborar ya sea generando un{" "}
              <a
                href="https://github.com/francosbenitez/psievidencia.com"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                pull request
              </a>{" "}
              o{" "}
              <Link href="/contact">
                <a className="underline">contactándonos</a>
              </Link>{" "}
              para dar una mano más de cerca con aspectos de desarrollo.
            </p>
          </li>
          <li className="mb-6">
            <span className="font-bold">Diseño</span>
            <p>
              Como sabrás, este sitio aún no cuenta con las mejores prácticas en
              términos de UX/UI, ni el mejor logo, etc. Si te gustaría aportar
              desde este lado, ¡sos{" "}
              <Link href="/contact">
                <a className="underline">más que bienvenide</a>
              </Link>
              !
            </p>
          </li>
          <li className="mb-6">
            <span className="font-bold">Cafecito</span>
            <p>
              Contamos con un{" "}
              <a
                href="https://cafecito.app/psievidencia"
                className="underline"
                target="_blank"
                rel="noreferrer"
              >
                Cafecito
              </a>
              , principalmente para paliar todas las cuestiones relativas al
              servidor, hosting y dominio del sitio. Además, el Cafecito
              funciona como un medio para incentivar el laburo que venimos
              haciendo entre todes. (En realidad, yo prefiero una pizza, pero un
              Cafecito viene súper bien).
            </p>
          </li>
          <li className="mb-6">
            <span className="font-bold">Feedback</span>
            <p>
              Este sitio siempre va a estar en continua construcción, tratando
              de paliar al máximo tanto las necesidades de los psicólogues, como
              aquellas provenientes de les usuaries. Así que, por ello, ¡te
              invitamos a{" "}
              <Link href="/contact">
                <a className="underline">escribirnos</a>
              </Link>{" "}
              con cualquier sugerencia que tengas!
            </p>
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
