import React, { useState } from "react";

const EditGenderIdentity = ({
  setForm,
  selectedGenderIdentity,
}: {
  setForm: any;
  selectedGenderIdentity: any;
}) => {
  const handleGenderIdentity = (e: any) => {
    setValue1(e.target.value);
    setForm((currentFormData: any) => {
      const nextFormData = {
        ...currentFormData,
        ["gender_identity"]: e.target.value,
      };
      return nextFormData;
    });
  };

  const [value1, setValue1] = useState(selectedGenderIdentity);

  return (
    <div className="my-4">
      <label className="block text-gray-700 text-1xl mb-2">
        Identidad de género
      </label>
      <select
        onChange={handleGenderIdentity}
        defaultValue={value1}
        className="p-2 rounded w-96"
      >
        <option value={"Mujer"}>Mujer</option>
        <option value={"Varón"}>Varón</option>
        <option value={"No binarie"}>No binarie</option>
      </select>
    </div>
  );
};

export default EditGenderIdentity;
