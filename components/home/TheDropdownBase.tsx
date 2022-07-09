import { useEffect, useState, useRef } from "react";
import PsychologistsService from "../../services/PsychologistsService";
import { Data } from "../../types";
import SearchName from "./SearchName";
import useDebounce from "../../hooks/useDebounce";

type Props = {
  type: string;
  setSelectedOptions: React.Dispatch<React.SetStateAction<Data[]>>;
  data: Data[];
  setData: React.Dispatch<React.SetStateAction<Data[]>>;
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
  const [name, setName] = useState<string | null>(null);
  const debouncedName = useDebounce(name, 1000);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    if (target) {
      setName(target.value);
    }
  };

  const fetchData = async (
    pagination: number,
    type: string,
    name: string | null
  ) => {
    const data = (await PsychologistsService.lists(1, type, name)).data;
    setData(data.results);
    setPagination(1);
  };

  const fetchMoreData = async (
    pagination: number,
    type: string,
    name: string | null
  ) => {
    const data = (await PsychologistsService.lists(pagination, type, name))
      .data;
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
    fetchData(pagination, type, debouncedName);
  }, []);

  useEffect(() => {
    if (pagination > 1) {
      fetchMoreData(pagination, type, debouncedName);
    }
  }, [pagination]);

  useEffect(() => {
    fetchData(pagination, type, debouncedName);
  }, [debouncedName]);

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
            {type === "specializations" && (
              <SearchName handleNameChange={handleNameChange} />
            )}
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
