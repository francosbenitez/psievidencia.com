import React from "react";
// import { FormattedMessage } from "react-intl";
// import TheModal from "./TheModal";
// import TheSuggestions from "./TheSuggestions";
// import SuggestionsBtn from "./SuggestionsBtn";
import Instagram from "@/public/icons/instagram.svg";
import Twitter from "@/public/icons/twitter.svg";
import Email from "@/public/icons/email.svg";
import Magnifier from "@/public/icons/magnifier.svg";

const HomeFooter = () => {
  return (
    <div className="footer-custom">
      <footer className="footer p-10 container w-11/12 mx-auto">
        <div>
          <Magnifier className="w-8 h-8" />
          <p>Psievidencia</p>
        </div>
        <div>
          <span className="footer-title">PROYECTO</span>
          <a className="link link-hover">Acerca</a>
          <a className="link link-hover">Sugerencias</a>
          <a className="link link-hover">Colaborar</a>
        </div>
        <div>
          <span className="footer-title">Mi perfil</span>
          <a className="link link-hover">Mis favoritos</a>
          <a className="link link-hover">Editar perfil</a>
          <a className="link link-hover">Cerrar sesión</a>
        </div>
        <div>
          <span className="footer-title">Social</span>
          <div className="grid grid-flow-col gap-4">
            <a
              href="https://twitter.com/psievidencia"
              target="_blank"
              rel="noreferrer"
            >
              <Twitter />
            </a>
            <a
              href="https://www.instagram.com/psievidencia_com/"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram />
            </a>
            <a
              href="mailto:psievidencia.com@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <Email />
            </a>
          </div>
        </div>
      </footer>
    </div>
    // <footer className="bottom-0 w-full mx-auto py-16 footer-custom">
    //   <div className="container w-11/12 mx-auto">
    //     <div className="relative text-center m-auto flex w-full">
    //       <div className="w-1/2 flex">
    //         <span className="text-left text-sm md:text-md">
    //           <FormattedMessage id="footer.to.be.part" />{" "}
    //           <a
    //             className="underline"
    //             target="_blank"
    //             rel="noreferrer"
    //             href="https://docs.google.com/forms/d/e/1FAIpQLSccyO5jICweFShGTLEEiCOYLYySlEUacI0_4IDCY10AdYqIpA/viewform"
    //           >
    //             <FormattedMessage id="footer.google.forms" />
    //           </a>
    //         </span>
    //       </div>
    //       <TheModal
    //         button={<SuggestionsBtn />}
    //         title={"Sugerencias"}
    //         content={<TheSuggestions />}
    //       />
    //     </div>
    //   </div>
    // </footer>
  );
};

export default HomeFooter;
