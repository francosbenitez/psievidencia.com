import React from "react";

const EditTeam = () => {
  return (
    <div className="my-4">
      <label className="block text-gray-700 text-1xl mb-2" htmlFor="username">
        Equipo de trabajo
      </label>
      <input
        className="p-2 rounded w-96"
        id="username"
        type="text"
        placeholder="Equipo de trabajo"
      />
    </div>
  );
};

export default EditTeam;
