import React from "react";
import { ReactComponent as Facebook } from "../assets/icons/facebook.svg";
import { ReactComponent as Twitter } from "../assets/icons/twitter.svg";
import { ReactComponent as WhatsApp } from "../assets/icons/whatsapp.svg";
import { ReactComponent as Instagram } from "../assets/icons/instagram.svg";
import { Link } from "react-router-dom";

const PsychologistsCards = ({ psychologist }) => {
  return (
    <Link
      to={`/psychologists/${psychologist.id}`}
      className="w-full rounded-lg shadow-xl bg-white p-10 flex flex-col"
    >
      {psychologist.image_url ? (
        <img
          src={psychologist.image_url}
          alt=""
          className="rounded-full p-4 h-40 w-40 mx-auto"
        />
      ) : (
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          alt=""
          className="rounded-full p-4 h-40 w-40 mx-auto"
        />
      )}
      <header className=" text-2xl font-extrabold py-4 px-4 text-center">
        {psychologist.name}
      </header>
      <div>
        <ul className="text-gray-500 text-center font-semibold break-words">
          <li>{psychologist.province}</li>
          <li className="text-left">
            {psychologist.therapeutic_model.split(",").map((item) => (
              <span className="bg-indigo-400 text-white break-all mr-1 px-1">
                {item}
              </span>
            ))}
          </li>
          <li className="text-left">
            {psychologist.work_population.split(",").map((item) => (
              <span className="bg-green-400 text-white break-all mr-1 px-1">
                {item}
              </span>
            ))}
          </li>
        </ul>
      </div>
      <footer className="text-center py-3 text-gray-500 flex justify-center mt-auto block">
        {psychologist.online === "Sí" && (
          <p className="p-2">
            <span className="bg-indigo-500 text-white p-2">Online</span>
          </p>
        )}
        {psychologist.facebook_url && (
          <a
            target="_blank"
            className="mx-3"
            rel="noreferrer"
            href={psychologist.facebook_url}
          >
            <Facebook />
          </a>
        )}
        {psychologist.twitter_url && (
          <a
            target="_blank"
            className="mx-3"
            rel="noreferrer"
            href={psychologist.twitter_url}
          >
            <Twitter />
          </a>
        )}
        {psychologist.whatsapp_url && (
          <a
            target="_blank"
            className="mx-3"
            rel="noreferrer"
            href={"https://wa.me/549" + psychologist.whatsapp_url}
          >
            <WhatsApp />
          </a>
        )}
        {psychologist.instagram_url && (
          <a
            target="_blank"
            className="mx-3"
            rel="noreferrer"
            href={psychologist.instagram_url}
          >
            <Instagram />
          </a>
        )}
      </footer>
    </Link>
  );
};

export default PsychologistsCards;
