import { useEffect, useState, useRef } from "react";
import PsychologistsService from "../../services/PsychologistsService";

type Props = {
  type: string;
  setSelectedOptions: React.Dispatch<React.SetStateAction<Data[]>>;
  data: Data[];
  setData: React.Dispatch<React.SetStateAction<any[]>>;
};

type Data = {
  id: number;
  name: string;
};

const TheDropdownBase = ({
  type,
  setSelectedOptions,
  data,
  setData,
}: Props) => {
  const [pagination, setPagination] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);
  const observed = useRef<HTMLUListElement | null>(null);

  const fetchData = async () => {
    const data = (await PsychologistsService.lists(1, type)).data;
    setData(data.results);
  };

  const fetchMoreData = async (pagination: number) => {
    const data = (await PsychologistsService.lists(pagination, type)).data;
    setData((item) => item.concat(data.results));
  };

  const addSelectedOptions = (value: Data) => {
    setSelectedOptions((oldArray) => [...oldArray, value]);
  };

  const updateData = (option: Data) => {
    setData(data.filter((data) => data.id !== option.id));
  };

  const handlePagination = () => {
    setPagination(pagination + 1);
  };

  const handleObserved = (el: HTMLUListElement | null) => {
    console.log("el", el);
    if (el != null) {
      el.addEventListener("scroll", () => {
        if (el.scrollTop + el.clientHeight >= el.scrollHeight) {
          handlePagination();
        }
      });
    }
  };

  const onOptionClicked = (option: Data) => {
    updateData(option);
    setIsOpen(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (pagination > 1) {
      fetchMoreData(pagination);
    }
  }, [pagination]);

  return (
    <div className="sm:w-1/4 my-6 w-full">
      <div className="dropdown-header cursor-pointer h-full" onClick={toggling}>
        Filter by {type.replace("_", " ")}
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
