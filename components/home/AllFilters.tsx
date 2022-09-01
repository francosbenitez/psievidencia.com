import React from "react";
import SearchName from "./SearchName";
import TheCheckbox from "./TheCheckbox";
import { Data } from "../../types";
import TheDropdown from "./TheDropdown";

const AllFilters = ({
  handleNameChange,
  handleHpChange,
  hasPerspective,
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
  selectedOptionPr,
  setSelectedOptionPr,
  selectedOptionGi,
  setSelectedOptionGi,
  className,
  sp,
  setSp,
  tm,
  setTm,
  wp,
  setWp,
  wm,
  setWm,
  ed,
  setEd,
  pr,
  setPr,
  gi,
  setGi,
}: {
  handleNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleHpChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  hasPerspective: string | undefined;
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
  selectedOptionPr: Data;
  setSelectedOptionPr: React.Dispatch<React.SetStateAction<Data | {}>>;
  selectedOptionGi: Data;
  setSelectedOptionGi: React.Dispatch<React.SetStateAction<Data | {}>>;
  className?: string;
  sp: Data[];
  setSp: React.Dispatch<React.SetStateAction<Data[]>>;
  tm: Data[];
  setTm: React.Dispatch<React.SetStateAction<Data[]>>;
  wp: Data[];
  setWp: React.Dispatch<React.SetStateAction<Data[]>>;
  wm: Data[];
  setWm: React.Dispatch<React.SetStateAction<Data[]>>;
  ed: Data[];
  setEd: React.Dispatch<React.SetStateAction<Data[]>>;
  pr: Data[];
  setPr: React.Dispatch<React.SetStateAction<Data[]>>;
  gi: Data[];
  setGi: React.Dispatch<React.SetStateAction<Data[]>>;
}) => {
  return (
    <div className={`${className ? className : ""}`}>
      <div className="sm:flex sm:space-x-4 sm:mb-6 justify-center">
        <div className="w-full sm:w-1/3 drop">
          <SearchName handleNameChange={handleNameChange} />
        </div>

        <div className="w-full sm:w-1/3 drop">
          <TheCheckbox
            handleHpChange={handleHpChange}
            hasPerspective={hasPerspective}
          />
        </div>
      </div>
      <TheDropdown
        selectedOptionsSp={selectedOptionsSp}
        setSelectedOptionsSp={setSelectedOptionsSp}
        selectedOptionsTm={selectedOptionsTm}
        setSelectedOptionsTm={setSelectedOptionsTm}
        selectedOptionsWp={selectedOptionsWp}
        setSelectedOptionsWp={setSelectedOptionsWp}
        selectedOptionsWm={selectedOptionsWm}
        setSelectedOptionsWm={setSelectedOptionsWm}
        selectedOptionEd={selectedOptionEd}
        setSelectedOptionEd={setSelectedOptionEd}
        selectedOptionPr={selectedOptionPr}
        setSelectedOptionPr={setSelectedOptionPr}
        selectedOptionGi={selectedOptionGi}
        setSelectedOptionGi={setSelectedOptionGi}
        sp={sp}
        setSp={setSp}
        tm={tm}
        setTm={setTm}
        wp={wp}
        setWp={setWp}
        wm={wm}
        setWm={setWm}
        ed={ed}
        setEd={setEd}
        pr={pr}
        setPr={setPr}
        gi={gi}
        setGi={setGi}
      />
    </div>
  );
};

export default AllFilters;
