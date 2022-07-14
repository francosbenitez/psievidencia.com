import { useState } from "react";
import TheDropdownOptions from "./TheDropdownOptions";
import TheDropdownBaseIds from "./TheDropdownBaseIds";
import TheDropdownBaseName from "./TheDropdownBaseName";
import TheDropdownOptionsEd from "./TheDropdownOptionsEd";
import { Data } from "../../types";

type Props = {
  selectedOptionsSp: Data[];
  setSelectedOptionsSp: React.Dispatch<React.SetStateAction<Data[]>>;
  selectedOptionsTm: Data[];
  setSelectedOptionsTm: React.Dispatch<React.SetStateAction<Data[]>>;
  selectedOptionsWp: Data[];
  setSelectedOptionsWp: React.Dispatch<React.SetStateAction<Data[]>>;
  selectedOptionEd: Data;
  setSelectedOptionEd: React.Dispatch<React.SetStateAction<Data | {}>>;
  selectedOptionGi: Data;
  setSelectedOptionGi: React.Dispatch<React.SetStateAction<Data | {}>>;
};

const TheDropdown = ({
  selectedOptionsSp,
  setSelectedOptionsSp,
  selectedOptionsTm,
  setSelectedOptionsTm,
  selectedOptionsWp,
  setSelectedOptionsWp,
  selectedOptionEd,
  setSelectedOptionEd,
  selectedOptionGi,
  setSelectedOptionGi,
}: Props) => {
  const [sp, setSp] = useState<Data[]>([]);
  const [tm, setTm] = useState<Data[]>([]);
  const [wp, setWp] = useState<Data[]>([]);
  const [ed, setEd] = useState<Data[]>([]);
  const [gi, setGi] = useState<Data[]>([]);

  return (
    <>
      <div className="sm:flex sm:space-x-4 mb-6">
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
      <TheDropdownOptions
        selectedOptions={selectedOptionsSp}
        setSelectedOptions={setSelectedOptionsSp}
        setData={setSp}
      />
      <TheDropdownOptions
        selectedOptions={selectedOptionsTm}
        setSelectedOptions={setSelectedOptionsTm}
        setData={setTm}
      />
      <TheDropdownOptions
        selectedOptions={selectedOptionsWp}
        setSelectedOptions={setSelectedOptionsWp}
        setData={setWp}
      />
      <TheDropdownOptionsEd
        selectedOption={selectedOptionEd}
        setSelectedOption={setSelectedOptionEd}
        setData={setEd}
      />
      <TheDropdownOptionsEd
        selectedOption={selectedOptionGi}
        setSelectedOption={setSelectedOptionGi}
        setData={setGi}
      />
    </>
  );
};

export default TheDropdown;
