import React from "react";

const PsychologistsCards = ({ psychologists }) => {
  return (
    <ul className="divide-y divide-gray-200">
      {psychologists.map((item) => {
        return (
          <li key={item.Name} className="py-4 flex">
            <img
              className="h-10 w-10 rounded-full"
              src={item["Image URL"]}
              alt=""
            />
            <div className="ml-3">
              <p>{item["Name"]}</p>
              <p>{item["Theorical discipline"]}</p>
              <p>{item["Specialization"]}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default PsychologistsCards;
