import React from "react";
import TheCard from "./TheCard";

const CardWrapper = ({ psychologists }) => {
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {psychologists.map((psychologist) => {
        return <TheCard key={psychologist.id} psychologist={psychologist} />;
      })}
    </div>
  );
};

export default CardWrapper;
