import React from "react";

const EditPrepaidType = () => {
  return (
    <div className="my-4">
      <label className="block text-gray-700 text-1xl mb-2" htmlFor="username">
        Tipo de prepaga
      </label>
      <input
        className="p-2 rounded w-96"
        id="username"
        type="text"
        placeholder="Tipo de prepaga"
      />
    </div>
  );
};

export default EditPrepaidType;
