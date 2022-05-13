import React from "react";
import { ReactComponent as Facebook } from "../assets/icons/facebook.svg";
import { ReactComponent as Twitter } from "../assets/icons/twitter.svg";
import { ReactComponent as WhatsApp } from "../assets/icons/whatsapp.svg";
import { ReactComponent as Instagram } from "../assets/icons/instagram.svg";

const PsychologistsCards = ({ psychologist }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/4 rounded-lg shadow-xl bg-white p-10 flex flex-col">
      <img
        src={psychologist["Image URL"]}
        alt=""
        className="rounded-full p-4 h-40 w-40 mx-auto"
      />
      <header className=" text-2xl font-extrabold py-4 px-4 text-center">
        {psychologist["Name"]}
      </header>
      <div>
        <ul className="text-gray-500 text-center font-semibold">
          <li>{psychologist["Theorical discipline"]}</li>
          <li>{psychologist["Specialization"]}</li>
        </ul>
      </div>
      <footer className="text-center py-3 px-8 text-gray-500 flex justify-between mt-auto block">
        <a target="_blank" rel="noreferrer" href={psychologist["Facebook URL"]}>
          <Facebook />
        </a>
        <a target="_blank" rel="noreferrer" href={psychologist["Twitter URL"]}>
          <Twitter />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href={"https://wa.me/549" + psychologist["WhatsApp"]}
        >
          <WhatsApp />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href={psychologist["Instagram URL"]}
        >
          <Instagram />
        </a>
      </footer>
    </div>
  );
};

export default PsychologistsCards;
