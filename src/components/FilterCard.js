import React from "react";
import { ReactComponent as Facebook } from "../assets/icons/facebook.svg";
import { ReactComponent as Twitter } from "../assets/icons/twitter.svg";
import { ReactComponent as WhatsApp } from "../assets/icons/whatsapp.svg";
import { ReactComponent as Instagram } from "../assets/icons/instagram.svg";

const PsychologistsCards = ({ psychologist }) => {
  return (
    // <div className="w-full sm:w-1/2 md:w-1/4 rounded-lg shadow-xl bg-white p-10 flex flex-col">
    <div className="w-full rounded-lg shadow-xl bg-white p-10 flex flex-col">
      <img
        src={psychologist.image_url}
        alt=""
        className="rounded-full p-4 h-40 w-40 mx-auto"
      />
      <header className=" text-2xl font-extrabold py-4 px-4 text-center">
        {psychologist.name}
      </header>
      <div>
        <ul className="text-gray-500 text-center font-semibold">
          <li>{psychologist.specialization}</li>
          <li>{psychologist.discipline}</li>
        </ul>
      </div>
      <footer className="text-center py-3 px-8 text-gray-500 flex justify-between mt-auto block">
        {psychologist.facebook_url && (
          <a target="_blank" rel="noreferrer" href={psychologist.facebook_url}>
            <Facebook />
          </a>
        )}
        {psychologist.twitter_url && (
          <a target="_blank" rel="noreferrer" href={psychologist.twitter_url}>
            <Twitter />
          </a>
        )}
        {psychologist.whatsapp_url && (
          <a
            target="_blank"
            rel="noreferrer"
            href={"https://wa.me/549" + psychologist.whatsapp_url}
          >
            <WhatsApp />
          </a>
        )}
        {psychologist.instagram_url && (
          <a target="_blank" rel="noreferrer" href={psychologist.instagram_url}>
            <Instagram />
          </a>
        )}
      </footer>
    </div>
  );
};

export default PsychologistsCards;
