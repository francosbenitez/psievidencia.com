import React, { useState } from "react";

const EditName = ({
  selectedName,
  setForm,
}: {
  selectedName: any;
  setForm: any;
}) => {
  const handleName = (e: any) => {
    console.log("e.target.value", e.target.value);
    setValue1(e.target.value);
    setForm((currentFormData: any) => {
      const nextFormData = {
        ...currentFormData,
        ["name"]: e.target.value,
      };
      return nextFormData;
    });
  };

  const [value1, setValue1] = useState(selectedName);

  return (
    <div className="my-4">
      <label className="block text-gray-700 text-1xl mb-2">Nombre</label>
      <input
        className="p-2 rounded w-96"
        value={value1}
        onChange={(e) => handleName(e)}
      />
    </div>
  );
};

export default EditName;
