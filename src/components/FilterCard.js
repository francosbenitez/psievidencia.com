import React from "react";

const PsychologistsCards = ({ psychologist }) => {
  return (
    <ul className="divide-y divide-gray-200">
      <li className="py-4 flex">
        <img
          className="h-10 w-10 rounded-full"
          src={psychologist["Image URL"]}
          alt=""
        />
        <div className="ml-3">
          <p>{psychologist["Name"]}</p>
          <p>{psychologist["Theorical discipline"]}</p>
          <p>{psychologist["Specialization"]}</p>
        </div>
      </li>
    </ul>
  );
};

export default PsychologistsCards;
