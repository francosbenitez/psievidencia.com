import React, { useState } from "react";

const EditUsername = ({
  selectedUsername,
  setForm,
}: {
  selectedUsername: any;
  setForm: any;
}) => {
  const handleUsername = (e: any) => {
    setValue1(e.target.value);
    setForm((currentFormData: any) => {
      const nextFormData = {
        ...currentFormData,
        ["username"]: e.target.value,
      };
      return nextFormData;
    });
  };

  const [value1, setValue1] = useState(selectedUsername);

  return (
    <div className="my-4">
      <label className="block text-gray-700 text-1xl mb-2">Username</label>
      <input
        disabled
        className="p-2 rounded-md w-96  border border-slate-300 shadow-sm placeholder-slate-400"
        value={value1}
        onChange={(e) => handleUsername(e)}
      />
    </div>
  );
};

export default EditUsername;
