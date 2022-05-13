import React from "react";

const PsychologistsCards = ({ psychologists }) => {
  return (
    <div>
      {psychologists.map((item) => {
        return (
          <div key={item.Name}>
            <h1>{item["Name"]}</h1>
            <p>{item["Theorical discipline"]}</p>
            <p>{item["Specialization"]}</p>
            <img
              className="h-10 w-10 rounded-full"
              src={item["Image URL"]}
              alt=""
            />
          </div>
        );
      })}
    </div>
  );
};

export default PsychologistsCards;
