import React from "react";

const TheCheckbox = ({
  handleChange,
  has,
  text,
}: {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  has: string | undefined;
  text: string;
}) => {
  let isChecked = false;

  if (has === "si") {
    isChecked = true;
  } else {
    isChecked = false;
  }

  return (
    <div className="bg-white rounded shadow-md w-full h-full sm:flex items-center dropdown-header">
      <span className="w-3/4">{text}</span>
      <span className="w-1/4">
        <label className="cursor-pointer float-right flex">
          <div className={`fake-checkbox ${isChecked ? "active" : ""}`}>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleChange}
            />
          </div>
        </label>
      </span>
    </div>
  );
};

export default TheCheckbox;
