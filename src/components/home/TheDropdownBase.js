import { useEffect, useState, useRef } from "react";
import PsychologistsService from "../../services/PsychologistsService";

const TheDropdownBase = ({ type, setSelectedOptions, data, setData }) => {
  const [pagination, setPagination] = useState(1);

  const fetchData = async () => {
    const data = (await PsychologistsService.lists(1, type)).data;
    setData(data.results);
  };

  const fetchMoreData = async (pagination) => {
    const data = (await PsychologistsService.lists(pagination, type)).data;
    setData((item) => item.concat(data.results));
  };

  const addSelectedOptions = (value) => {
    setSelectedOptions((oldArray) => [...oldArray, value]);
  };

  const updateData = (option) => {
    setData(data.filter((data) => data.id !== option.id));
  };

  const handlePagination = () => {
    setPagination(pagination + 1);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (pagination > 1) {
      fetchMoreData(pagination);
    }
  }, [pagination]);

  ///////////
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
    updateData(option);
    setIsOpen(false);
  };
  ///////////
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
                  addSelectedOptions(option);
                }}
                key={option.id}
              >
                {option.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TheDropdownBase;
