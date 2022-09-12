import React from "react";

const EditWorkModality = () => {
  return (
    <div className="my-4">
      <label className="block text-gray-700 text-1xl mb-2" htmlFor="username">
        Modalidad de trabajo
      </label>
      <input
        className="p-2 rounded w-96"
        id="username"
        type="text"
        placeholder="Modalidad de trabajo"
      />
    </div>
  );
};

export default EditWorkModality;
