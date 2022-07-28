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
  selectedOptionGi,
  setSelectedOptionGi,
  className,
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
  selectedOptionGi: Data;
  setSelectedOptionGi: React.Dispatch<React.SetStateAction<Data | {}>>;
  className?: string;
}) => {
  return (
    <div className={`${className ? className : ""}`}>
      <div className="sm:flex sm:space-x-4 sm:mb-6 justify-center">
        <div className="w-full sm:w-1/3">
          <SearchName handleNameChange={handleNameChange} />
        </div>

        <div className="w-full sm:w-1/3">
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
        selectedOptionGi={selectedOptionGi}
        setSelectedOptionGi={setSelectedOptionGi}
      />
    </div>
  );
};

export default AllFilters;
