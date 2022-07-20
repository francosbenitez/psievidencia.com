import React from "react";
import Suggestions from "../../public/icons/suggestions.svg";

const SuggestionsBtn = ({ showModal }: any) => {
  return (
    <button className="w-1/2 flex" onClick={showModal}>
      <div className="ml-auto">
        <span className="mr-1 bg-gray-100 text-sm md:text-md">Sugerencias</span>
        <Suggestions className="inline w-3 h-3 align-text-top" />
      </div>
    </button>
  );
};

export default SuggestionsBtn;
