import React from "react";

const PsychologistsDetail = ({ psychologist }) => {
  return (
    <div>
      Psychologist ID: {psychologist.id}
      <br />
      Psychologist name: {psychologist.name}
    </div>
  );
};

export default PsychologistsDetail;
