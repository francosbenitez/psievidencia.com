import React from "react";

const EditPhoneNumber = () => {
  return (
    <div className="my-4">
      <label className="block text-gray-700 text-1xl mb-2" htmlFor="username">
        Número de teléfono
      </label>
      <input
        className="p-2 rounded w-96"
        id="username"
        type="text"
        placeholder="Número de teléfono"
      />
    </div>
  );
};

export default EditPhoneNumber;
