import { useState } from "react";
import TheDropdownOptionsIds from "./TheDropdownOptionsIds";
import TheDropdownBaseIds from "./TheDropdownBaseIds";
import TheDropdownBaseName from "./TheDropdownBaseName";
import TheDropdownOptionsName from "./TheDropdownOptionsName";
import { Data } from "../../types";

type Props = {
  selectedOptionsSp: Data[];
  setSelectedOptionsSp: React.Dispatch<React.SetStateAction<Data[]>>;
  selectedOptionsTm: Data[];
  setSelectedOptionsTm: React.Dispatch<React.SetStateAction<Data[]>>;
  selectedOptionsWp: Data[];
  setSelectedOptionsWp: React.Dispatch<React.SetStateAction<Data[]>>;
  selectedOptionsWm: Data[];
  setSelectedOptionsWm: React.Dispatch<React.SetStateAction<Data[]>>;
  selectedOptionEd: Data;
  setSelectedOptionEd: React.Dispatch<React.SetStateAction<Data | {}>>;
  selectedOptionGi: Data;
  setSelectedOptionGi: React.Dispatch<React.SetStateAction<Data | {}>>;
  className?: string;
};

const TheDropdown = ({
  selectedOptionsSp,
  setSelectedOptionsSp,
  selectedOptionsTm,
  setSelectedOptionsTm,
  selectedOptionsWp,
  setSelectedOptionsWp,
  selectedOptionsWm,
  setSelectedOptionsWm,
  selectedOptionEd,
  setSelectedOptionEd,
  selectedOptionGi,
  setSelectedOptionGi,
  className,
}: Props) => {
  const [sp, setSp] = useState<Data[]>([]);
  const [tm, setTm] = useState<Data[]>([]);
  const [wp, setWp] = useState<Data[]>([]);
  const [wm, setWm] = useState<Data[]>([
    {
      id: 1,
      name: "Individual",
    },
    {
      id: 2,
      name: "Pareja",
    },
    {
      id: 3,
      name: "Familiar",
    },
    {
      id: 4,
      name: "Grupal",
    },
  ]);
  const [ed, setEd] = useState<Data[]>([]);
  const [gi, setGi] = useState<Data[]>([]);

  return (
    <div className={`${className ? className : ""}`}>
      <div className="sm:flex sm:space-x-4 sm:mb-6 justify-center">
        <TheDropdownBaseIds
          type={"specializations"}
          setSelectedOptions={setSelectedOptionsSp}
          data={sp}
          setData={setSp}
        />
        <TheDropdownBaseIds
          type={"therapeutic_models"}
          setSelectedOptions={setSelectedOptionsTm}
          data={tm}
          setData={setTm}
        />
        <TheDropdownBaseIds
          type={"work_populations"}
          setSelectedOptions={setSelectedOptionsWp}
          data={wp}
          setData={setWp}
        />
        <TheDropdownBaseIds
          type={"work_modalities"}
          setSelectedOptions={setSelectedOptionsWm}
          data={wm}
          setData={setWm}
        />
      </div>
      <div className="sm:flex sm:space-x-4 sm:mb-6 justify-center">
        <TheDropdownBaseName
          type={"education"}
          selectedOption={selectedOptionEd}
          setSelectedOption={setSelectedOptionEd}
          data={ed}
          setData={setEd}
        />
        <TheDropdownBaseName
          type={"gender_identity"}
          selectedOption={selectedOptionGi}
          setSelectedOption={setSelectedOptionGi}
          data={gi}
          setData={setGi}
        />
      </div>
      <TheDropdownOptionsIds
        selectedOptions={selectedOptionsSp}
        setSelectedOptions={setSelectedOptionsSp}
        setData={setSp}
      />
      <TheDropdownOptionsIds
        selectedOptions={selectedOptionsTm}
        setSelectedOptions={setSelectedOptionsTm}
        setData={setTm}
      />
      <TheDropdownOptionsIds
        selectedOptions={selectedOptionsWp}
        setSelectedOptions={setSelectedOptionsWp}
        setData={setWp}
      />
      <TheDropdownOptionsIds
        selectedOptions={selectedOptionsWm}
        setSelectedOptions={setSelectedOptionsWm}
        setData={setWm}
      />
      <TheDropdownOptionsName
        selectedOption={selectedOptionEd}
        setSelectedOption={setSelectedOptionEd}
        setData={setEd}
      />
      <TheDropdownOptionsName
        selectedOption={selectedOptionGi}
        setSelectedOption={setSelectedOptionGi}
        setData={setGi}
      />
    </div>
  );
};

export default TheDropdown;
