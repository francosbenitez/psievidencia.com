import React from "react";

const PsychologistsDetail = ({ psychologist }) => {
  return (
    <div className="container mx-auto py-28">
      <h1 className="text-center font-bold text-5xl mb-5">
        {psychologist.name}
      </h1>
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
