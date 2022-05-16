import React from "react";

const PsychologistsDetail = ({ psychologist }) => {
  return (
    <div>
      Psychologist ID: {psychologist.id}
      <br />
      Psychologist name: {psychologist.name}
      Datos adicionales: {psychologist.additional_data}
    </div>
  );
};

export default PsychologistsDetail;
