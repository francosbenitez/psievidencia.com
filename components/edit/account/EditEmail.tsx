import React, { useState } from "react";

const EditEmail = ({
  selectedEmail,
  setForm,
}: {
  selectedEmail: any;
  setForm: any;
}) => {
  const handleEmail = (e: any) => {
    setValue1(e.target.value);
    setForm((currentFormData: any) => {
      const nextFormData = {
        ...currentFormData,
        ["username"]: e.target.value,
      };
      return nextFormData;
    });
  };

  const [value1, setValue1] = useState(selectedEmail);

  return (
    <div className="my-4">
      <label className="block text-gray-700 text-1xl mb-2">Email</label>
      <input
        disabled
        className="p-2 rounded-md w-96 border border-slate-300 shadow-sm placeholder-slate-400"
        value={value1}
        onChange={(e) => handleEmail(e)}
      />
    </div>
  );
};

export default EditEmail;
