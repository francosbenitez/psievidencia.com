import TheDropdownBaseIds from "./TheDropdownBaseIds";
import TheDropdownBaseName from "./TheDropdownBaseName";
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
  gi: Data[];
  setGi: React.Dispatch<React.SetStateAction<Data[]>>;
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
  gi,
  setGi,
}: Props) => {
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
    </div>
  );
};

export default TheDropdown;
