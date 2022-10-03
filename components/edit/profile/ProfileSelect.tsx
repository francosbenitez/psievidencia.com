import React, { useState } from "react";

const EditGenderIdentity = ({
  setForm,
  selectedOption,
  dataToChange,
  label,
  options,
}: {
  setForm: any;
  selectedOption: any;
  dataToChange: string;
  label: string;
  options: string[];
}) => {
  const handleSelect = (e: any) => {
    setValue(e.target.value);
    setForm((currentFormData: any) => {
      const nextFormData = {
        ...currentFormData,
        [dataToChange]: e.target.value,
      };
      return nextFormData;
    });
  };

  const [value, setValue] = useState(selectedOption);

  return (
    <div className="my-4">
      <label className="block text-gray-700 text-1xl mb-2">{label}</label>
      <select
        onChange={handleSelect}
        defaultValue={value}
        className="p-2 rounded w-96"
      >
        {options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default EditGenderIdentity;
