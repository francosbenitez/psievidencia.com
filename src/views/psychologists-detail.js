import React from "react";

const PsychologistsDetail = ({ psychologist }) => {
  return (
    <div class="container mx-auto py-28">
      <h1 className="text-center font-bold text-5xl mb-5">
        {psychologist.name}
      </h1>
      <ul>
        <li>
          <span className="font-bold underline">Gender Identity</span>:{" "}
          {psychologist.gender}
        </li>
        <li>
          <span className="font-bold underline">Registration Type</span>:{" "}
          {psychologist.registration_type}
        </li>
        <li>
          <span className="font-bold underline">Additional Data</span>:{" "}
          {psychologist.additional_data}
        </li>
      </ul>
    </div>
  );
};

export default PsychologistsDetail;
