import React, { useState } from "react";
import { TheSelect } from "@/components/edit/TheSelect";

type Option = {
  id: number;
  name: string;
};

const ProfileSelect = ({
  setForm,
  selectedOptions,
  dataToChange,
  options,
  label,
}: {
  setForm: any;
  selectedOptions: any;
  dataToChange: string;
  options: Option[];
  label: string;
}) => {
  const handleSelect = (e: any) => {
    setValue(e);
    setForm((currentFormData: any) => {
      const nextFormData = {
        ...currentFormData,
        [dataToChange]: e,
      };
      return nextFormData;
    });
  };

  const [value, setValue] = useState(selectedOptions);

  return (
    <>
      <div className="my-4">
        <label className="block text-gray-700 text-1xl mb-2" htmlFor="username">
          {label}
        </label>
        <TheSelect
          multiple
          options={options}
          value={value}
          onChange={(e) => handleSelect(e)}
        />
      </div>
    </>
  );
};

export default ProfileSelect;
