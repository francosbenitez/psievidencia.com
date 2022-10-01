import React from "react";

const EditUsername = () => {
  return (
    <div className="my-4">
      <label className="block text-gray-700 text-1xl mb-2" htmlFor="username">
        Contraseña
      </label>
      <input
        disabled
        className="p-2 rounded-md w-96  border border-slate-300 shadow-sm placeholder-slate-400"
        id="username"
        type="text"
        placeholder="******************"
      />
    </div>
  );
};

export default EditUsername;
