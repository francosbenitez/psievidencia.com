import React, { useState } from "react";
import { TheSelect } from "@/components/edit/TheSelect";

const EditTherapeuticModel = ({
  setForm,
  selectedTM,
}: {
  setForm: any;
  selectedTM: any;
}) => {
  const handleTherapeuticModel = (e: any) => {
    console.log("e", e);
    setValue1(e);
    setForm((currentFormData: any) => {
      const nextFormData = {
        ...currentFormData,
        ["therapeutic_models"]: e,
      };
      return nextFormData;
    });
  };

  const [value1, setValue1] = useState(selectedTM);

  const optionsTM = [
    {
      id: 1,
      name: "Terapias Cognitivo Conductuales",
    },
    {
      id: 2,
      name: "ACT",
    },
    {
      id: 3,
      name: "DBT",
    },
    {
      id: 4,
      name: "Mindfulness",
    },
    {
      id: 5,
      name: "Análisis de la Conducta Aplicado",
    },
    {
      id: 6,
      name: "Terapias Sistémicas",
    },
    {
      id: 7,
      name: "FAP",
    },
  ];

  return (
    <>
      <div className="my-4">
        <label className="block text-gray-700 text-1xl mb-2" htmlFor="username">
          Modelo terapéutico
        </label>
        <TheSelect
          multiple
          options={optionsTM}
          value={value1}
          onChange={(e) => handleTherapeuticModel(e)}
        />
      </div>
    </>
  );
};

export default EditTherapeuticModel;
