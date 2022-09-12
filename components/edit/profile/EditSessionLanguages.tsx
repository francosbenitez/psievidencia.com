import React from "react";

const EditSessionLanguages = () => {
  return (
    <div className="my-4">
      <label className="block text-gray-700 text-1xl mb-2" htmlFor="username">
        Lenguajes para la sesión
      </label>
      <input
        className="p-2 rounded w-96"
        id="username"
        type="text"
        placeholder="Lenguajes para la sesión"
      />
    </div>
  );
};

export default EditSessionLanguages;
