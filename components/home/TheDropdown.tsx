import { useState } from "react";
import TheDropdownOptions from "./TheDropdownOptions";
import TheDropdownBase from "./TheDropdownBase";
import TheDropdownEducation from "./TheDropdownEducation";
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
}: Props) => {
  const [sp, setSp] = useState<Data[]>([]);
  const [tm, setTm] = useState<Data[]>([]);
  const [wp, setWp] = useState<Data[]>([]);
  const [ed, setEd] = useState<Data[]>([]);

  return (
    <>
      <div className="sm:flex sm:space-x-4 mb-6">
        <TheDropdownBase
          type={"specializations"}
          setSelectedOptions={setSelectedOptionsSp}
          data={sp}
          setData={setSp}
        />
        <TheDropdownBase
          type={"therapeutic_models"}
          setSelectedOptions={setSelectedOptionsTm}
          data={tm}
          setData={setTm}
        />
        <TheDropdownBase
          type={"work_populations"}
          setSelectedOptions={setSelectedOptionsWp}
          data={wp}
          setData={setWp}
        />
        <TheDropdownEducation
          selectedOption={selectedOptionEd}
          setSelectedOption={setSelectedOptionEd}
          data={ed}
          setData={setEd}
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
    </>
  );
};

export default TheDropdown;
