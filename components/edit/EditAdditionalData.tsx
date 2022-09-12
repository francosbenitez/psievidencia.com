import React from "react";

const EditAdditionalData = () => {
  return (
    <div className="my-4">
      <label className="block text-gray-700 text-1xl mb-2" htmlFor="username">
        Datos adicionales
      </label>
      <input
        className="p-2 rounded w-96"
        id="username"
        type="text"
        placeholder="Datos adicionales"
      />
    </div>
  );
};

export default EditAdditionalData;
