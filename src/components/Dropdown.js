import { useState, useEffect } from "react";

const Dropdown = ({ data, type }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);
  const onOptionClicked = (value) => () => {
    setSelectedOption(value.specialization);
    setIsOpen(false);
  };

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
    </div>
  );
};

export default Dropdown;
