import React, { useState } from "react";

const ProfileInput = ({
  selectedName,
  setForm,
  label,
  dataToChange,
  disabled,
}: {
  selectedName: any;
  setForm: any;
  label: string;
  dataToChange: string;
  disabled?: boolean;
}) => {
  const handleInput = (e: any) => {
    setValue(e.target.value);
    setForm((currentFormData: any) => {
      const nextFormData = {
        ...currentFormData,
        [dataToChange]: e.target.value,
      };
      return nextFormData;
    });
  };

  const [value, setValue] = useState(selectedName);

  return (
    <div className="my-4">
      <label className="block text-gray-700 text-1xl mb-2">{label}</label>
      <input
        disabled={disabled}
        className="p-2 rounded w-96 border border-primary focus-visible:outline-none"
        value={value}
        onChange={(e) => handleInput(e)}
      />
    </div>
  );
};

export default ProfileInput;
