import React from "react";

const ProfilePassword = () => {
  return (
    <div className="my-4">
      <label className="block text-gray-700 text-1xl mb-2">Contraseña</label>
      <div className="w-96 flex">
        <input
          disabled
          className="p-2 rounded border border-primary focus-visible:outline-none cursor-not-allowed"
          placeholder="******************"
        />
        <button className="rounded bg-primary text-white p-2 border-white ml-auto">
          Cambiar contraseña
        </button>
      </div>
    </div>
  );
};

export default ProfilePassword;
