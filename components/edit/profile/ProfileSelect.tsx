import React, { useState } from "react";
import { TheSelect } from "@/components/edit/TheSelect";

type Option = {
  id: number;
  name: string;
  slug?: string;
};

const ProfileSelect = ({
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
  options: Option[];
}) => {
  const handleSelect = (e: any) => {
    setValue(e);
    setForm((currentFormData: any) => {
      const nextFormData = {
        ...currentFormData,
        [dataToChange]: e.hasOwnProperty("slug") ? e.slug : e.name,
      };
      return nextFormData;
    });
  };

  const [value, setValue] = useState(selectedOption[0]);

  return (
    <div className="my-4">
      <label className="block text-gray-700 text-1xl mb-2">{label}</label>
      <TheSelect
        options={options}
        value={value}
        onChange={(e) => handleSelect(e)}
      />
    </div>
  );
};

export default ProfileSelect;
