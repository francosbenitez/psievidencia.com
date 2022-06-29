import { useState, useRef, useEffect } from "react";

const Dropdown = ({
  data,
  type,
  handleAdd,
  handleUpdate,
  handlePagination,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);

  const observed = useRef(null);

  const handleObserved = (el) => {
    if (el != null) {
      el.addEventListener("scroll", () => {
        if (el.scrollTop + el.clientHeight >= el.scrollHeight) {
          handlePagination();
        }
      });
    }
  };

  const onOptionClicked = (option) => {
    handleUpdate(option);
    setIsOpen(false);
  };

  return (
    <div className="sm:w-1/3 my-6 w-full">
      <div className="dropdown-header cursor-pointer h-full" onClick={toggling}>
        Filter by {type}
      </div>
      {isOpen && (
        <div>
          <ul
            className="dropdown-list"
            ref={(el) => {
              observed.current = el;
              handleObserved(el);
            }}
          >
            {data.map((option) => (
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
