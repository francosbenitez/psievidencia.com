import React from "react";

const EditUsername = () => {
  return (
    <div className="my-4">
      <label className="block text-gray-700 text-1xl mb-2" htmlFor="username">
        Email
      </label>
      <input
        className="p-2 rounded w-96"
        id="username"
        type="text"
        placeholder="Email"
      />
    </div>
  );
};

export default EditUsername;
