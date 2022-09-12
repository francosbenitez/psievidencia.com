import React from "react";

const EditRegistrationNumber = () => {
  return (
    <div className="my-4">
      <label className="block text-gray-700 text-1xl mb-2" htmlFor="username">
        Número de matrícula
      </label>
      <input
        className="p-2 rounded w-96"
        id="username"
        type="text"
        placeholder="Número de matrícula"
      />
    </div>
  );
};

export default EditRegistrationNumber;
