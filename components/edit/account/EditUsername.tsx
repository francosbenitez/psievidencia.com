import React from "react";

const EditUsername = () => {
  return (
    <div className="my-4">
      <label className="block text-gray-700 text-1xl mb-2" htmlFor="username">
        Nombre de usuario
      </label>
      <input
        className="p-2 rounded w-96"
        id="username"
        type="text"
        placeholder="Nombre de usuario"
      />
    </div>
  );
};

export default EditUsername;
