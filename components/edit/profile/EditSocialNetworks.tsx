import React from "react";

const EditSocialNetworks = () => {
  return (
    <div className="my-4">
      <label className="block text-gray-700 text-1xl mb-2" htmlFor="username">
        Redes sociales
      </label>
      <input
        className="p-2 rounded w-96"
        id="username"
        type="text"
        placeholder="Redes sociales"
      />
    </div>
  );
};

export default EditSocialNetworks;
