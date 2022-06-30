import { useState } from "react";
import TheDropdownOptions from "./TheDropdownOptions";
import TheDropdownBase from "./TheDropdownBase";

const TheDropdown = ({
  selectedOptionsSp,
  setSelectedOptionsSp,
  selectedOptionsTm,
  setSelectedOptionsTm,
  selectedOptionsWp,
  setSelectedOptionsWp,
}) => {
  const [sp, setSp] = useState([]);
  const [tm, setTm] = useState([]);
  const [wp, setWp] = useState([]);

  return (
    <>
      <div className="sm:flex sm:space-x-4">
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
      </div>

      <div className="container my-6">
        <TheDropdownOptions
          selectedOptions={selectedOptionsSp}
          setSelectedOptions={setSelectedOptionsSp}
          setData={setSp}
        />
        <TheDropdownOptions
          selectedOptions={selectedOptionsWp}
          setSelectedOptions={setSelectedOptionsWp}
          setData={setWp}
        />
        <TheDropdownOptions
          selectedOptions={selectedOptionsTm}
          setSelectedOptions={setSelectedOptionsTm}
          setData={setTm}
        />
      </div>
    </>
  );
};

export default TheDropdown;
