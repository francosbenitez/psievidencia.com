import React from "react";

const PsychologistsCards = ({ psychologist }) => {
  return (
    <div className="w-1/4 rounded-lg shadow-xl bg-white p-10">
      <img
        src={psychologist["Image URL"]}
        alt=""
        className="rounded-full p-4 h-40 w-40 mx-auto"
      />
      <header className=" text-2xl font-extrabold py-4 px-4 text-center">
        {psychologist["Name"]}
      </header>
      <div>
        <ul className="text-gray-500 text-center font-semibold">
          <li>{psychologist["Theorical discipline"]}</li>
          <li>{psychologist["Specialization"]}</li>
        </ul>
      </div>
      <footer className="text-center py-3 px-8 text-gray-500">
        <button className="py-2 px-4 mt-5 bg-green-500 rounded-lg text-white font-semibold hover:bg-green-600">
          FOLLOW
        </button>
      </footer>
    </div>

    // <ul className="divide-y divide-gray-200">
    //   <li className="py-4 flex">
    //     <img
    //       className="h-10 w-10 rounded-full"
    //       src={psychologist["Image URL"]}
    //       alt=""
    //     />
    //     <div className="ml-3">
    //       <p>{psychologist["Name"]}</p>
    //       <p>{psychologist["Theorical discipline"]}</p>
    //       <p>{psychologist["Specialization"]}</p>
    //     </div>
    //   </li>
    // </ul>
  );
};

export default PsychologistsCards;
