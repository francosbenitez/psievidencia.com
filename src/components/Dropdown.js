import { useState } from "react";
import DropdownList from "./DropdownList";

const Dropdown = ({ data, type, handleUpdate, selectedOptions, handleAdd }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = () => () => {
    setIsOpen(false);
  };

  return (
    <div className="w-1/3">
      <div className="dropdown-header" onClick={toggling}>
        Filter by {type}
      </div>
      {isOpen && (
        <div>
          <ul className="dropdown-list">
            {data.map((option) => (
              <li
                className="list-item"
                onClick={(onOptionClicked(option), handleAdd(option))}
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
        handleUpdate={handleUpdate}
      />
    </div>
  );
};

export default Dropdown;
