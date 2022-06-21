import { useState } from "react";

const Dropdown = ({ data, type, handleAdd }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = () => {
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
            {data.map((option) => (
              <li
                className="list-item break-words"
                onClick={() => {
                  onOptionClicked();
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
