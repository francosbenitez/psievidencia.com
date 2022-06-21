import { useState } from "react";

const Dropdown = ({
  specializations,
  type,
  handleAdd,
  updateSpecializations,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (option) => {
    updateSpecializations(option);
    setIsOpen(false);
  };

  return (
    <div className="w-1/3 my-6">
      <div className="dropdown-header cursor-pointer" onClick={toggling}>
        Filter by {type}
      </div>
      {isOpen && (
        <div>
          <ul className="dropdown-list">
            {specializations.map((option) => (
              <li
                className="list-item break-words"
                onClick={() => {
                  onOptionClicked(option);
                  handleAdd(option);
                }}
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
