import React from "react";

const PsychologistsCards = ({ psychologists }) => {
  return (
    <div>
      {psychologists.map((item) => {
        return (
          <div key={item.Name}>
            <h1>{item.Name}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default PsychologistsCards;
