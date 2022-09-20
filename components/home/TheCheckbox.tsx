import React from "react";

const TheCheckbox = ({
  handleHpChange,
  hasPerspective,
}: {
  handleHpChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  hasPerspective: string | undefined;
}) => {
  let isChecked = false;

  if (hasPerspective === "si") {
    isChecked = true;
  } else {
    isChecked = false;
  }

  return (
    <div className="bg-white rounded shadow-md w-full h-full sm:flex items-center dropdown-header">
      <span className="w-3/4">Perspectiva de género</span>
      <span className="w-1/4">
        <label className="cursor-pointer float-right flex">
          <div className={`fake-checkbox ${isChecked ? "active" : ""}`}>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleHpChange}
            />
          </div>
        </label>
      </span>
    </div>
  );
};

export default TheCheckbox;
