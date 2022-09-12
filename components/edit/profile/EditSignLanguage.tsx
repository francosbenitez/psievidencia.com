import React from "react";

const EditSignLanguage = () => {
  return (
    <div className="my-4">
      <label className="block text-gray-700 text-1xl mb-2" htmlFor="username">
        Lenguaje de señas
      </label>
      <input
        className="p-2 rounded w-96"
        id="username"
        type="text"
        placeholder="Lenguaje de señas"
      />
    </div>
  );
};

export default EditSignLanguage;
