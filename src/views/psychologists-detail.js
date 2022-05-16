import React from "react";

const PsychologistsDetail = ({ psychologist }) => {
  return (
    <div class="container mx-auto py-28">
      Psychologist ID: {psychologist.id}
      <br />
      Psychologist name: {psychologist.name}
      <br />
      Additional data: {psychologist.additional_data}
    </div>
  );
};

export default PsychologistsDetail;
