import { useState, useEffect } from "react";
import DropdownList from "./DropdownList";

const Dropdown = ({ data, type }) => {
  // const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);
  const onOptionClicked = (value) => () => {
    // setSelectedOptions(value.specialization);
    setSelectedOptions((oldArray) => [...oldArray, value]);
    setIsOpen(false);
  };

  // const handleUpdate = (id) => {
  //   console.log("id from handleUpdate", id);
  // setSelectedOptions(selectedOptions.filter((item) => item.id !== id));
  // };
  return (
    <div className="w-1/3">
      <div className="dropdown-header" onClick={toggling}>
        {/* {selectedOption || "Trastornos del estado del ánimo"} */}
        Filter by {type}
      </div>
      {isOpen && (
        <div>
          <ul className="dropdown-list">
            {data.map((option) => (
              <li
                className="list-item"
                onClick={onOptionClicked(option)}
                key={option.id}
              >
                {option.specialization}
              </li>
            ))}
          </ul>
        </div>
      )}

      <DropdownList
        selectedOptions={selectedOptions}
        setSelectedOptions={setSelectedOptions}
      />
    </div>
  );
};

export default Dropdown;
