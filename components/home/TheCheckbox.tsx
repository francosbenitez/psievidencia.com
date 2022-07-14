import React from "react";

const TheCheckbox = () => {
  return (
    <div
      className="bg-white rounded shadow-md w-full h-full flex items-center"
      style={{ padding: "0.4em 2em 0.4em 1em" }}
    >
      <span className="w-1/2">Perspectiva de género</span>
      <span className="w-1/2">
        <label className="cursor-pointer float-right">
          <input type="checkbox" />
        </label>
      </span>
    </div>
  );
};

export default TheCheckbox;
