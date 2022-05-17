import React from "react";
import { useNavigate } from "react-router-dom";
import Accordion from "../components/Accordion";

const PsychologistsDetail = ({ psychologist }) => {
  const accordionData = [
    {
      id: 1,
      title: "Identidad de Género",
      content: "gender",
    },
    {
      id: 2,
      title: "Tipo de Matrícula",
      content: "registration_type",
    },
    {
      id: 3,
      title:
        "Número de Matrícula (en caso de tener MN y MP, poner ambas en ese orden)",
      content: "registration_number",
    },
    {
      id: 4,
      title:
        "Añada el nombre de la institución o servicio en salud mental en caso de formar parte",
      content: "institution",
    },
    {
      id: 5,
      title: "¿Integra un equipo de salud con Médicx Psiquiatra?",
      content: "team",
    },
    {
      id: 6,
      title: "Mayor grado académico alcanzado",
      content: "education",
    },
    {
      id: 7,
      title: "Formación en Perspectiva de Género/LGBTIQ+",
      content: "gender_perspective",
    },
    {
      id: 8,
      title: "Modalidad de Trabajo",
      content: "work_modality",
    },
    {
      id: 9,
      title: "¿Trabaja con Obras Sociales / Prepagas?",
      content: "prepaid",
    },
    {
      id: 10,
      title: "Especificar cuáles",
      content: "prepaid_type",
    },
    {
      id: 11,
      title:
        "¿Facturás para realizar el reintegro en las Obras Sociales / Prepagas?",
      content: "invoice",
    },
    {
      id: 12,
      title: "¿Utiliza Lengua de Señas? (manejo fluido para una sesión)",
      content: "sign_language",
    },
    {
      id: 13,
      title:
        "Además de Español, ¿tiene manejo de otro/s idioma/s fluido/s para una sesión?",
      content: "session_languages",
    },
    {
      id: 14,
      title:
        "Algún dato que quieras añadir y no se haya contemplado previamente en el cuestionario",
      content: "additional_data",
    },
  ];

  let navigate = useNavigate();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let d = psychologist.date.split(" ");
  d = d[0].split("/");
  d = new Date(d[2] + "/" + d[1] + "/" + d[0]);

  const formattedDate =
    d.getDay() + " de " + monthNames[d.getMonth()] + ", " + d.getFullYear();
  return (
    <div className="container mx-auto py-28 px-5 sm:px-0">
      <button
        className="
        absolute
        top-[2rem]
        rounded-md
        w-10
        h-10
        overflow-hidden
        block
        before:bg-custom-image before:bg-no-repeat before:bg-cover before:bg-center 
        before:absolute before:inset-0
        before:block"
        onClick={() => navigate(-1)}
      ></button>
      <h1 className="text-center font-bold text-5xl mb-5">
        {psychologist.name}
      </h1>
      <h2 className="text-2xl text-center">{psychologist.email}</h2>
      <h3 className="text-1xl underline my-6">{formattedDate}</h3>
      <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={psychologist[content]} />
        ))}
      </div>
      <div>
        <p className="font-bold text-lg">Contacto</p>
        <div className="grid grid-cols-2 gap-4">
          <p>
            <span className="underline">Redes sociales</span>:{" "}
            {psychologist.social_networks}
          </p>
          <p className="text-right">
            <span className="underline">
              Número de teléfono o mail de contacto
            </span>
            : {psychologist.phone_number}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PsychologistsDetail;
