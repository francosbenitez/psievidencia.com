import React from "react";
import { useNavigate } from "react-router-dom";

const PsychologistsDetail = ({ psychologist }) => {
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
  const d = new Date(psychologist.date);
  const formattedDate =
    d.getDay() + " de " + monthNames[d.getMonth()] + ", " + d.getFullYear();
  return (
    <div className="container mx-auto py-28">
      <button
        className="
        rounded-md
        w-10
        h-10
        relative
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
      <h2 className="text-2xl">{formattedDate}</h2>
      <ul>
        {Object.keys(psychologist).map((item, index) => (
          <li key={index}>
            <span className="font-bold underline">{item}</span>:{" "}
            {psychologist[item]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PsychologistsDetail;
