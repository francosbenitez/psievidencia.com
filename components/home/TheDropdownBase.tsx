import { useEffect, useState, useRef } from "react";
import PsychologistsService from "../../services/PsychologistsService";
import { Data } from "../../types";
import SearchName from "./SearchName";
import useDebounce from "../../hooks/useDebounce";
import { FormattedMessage } from "react-intl";
import ArrowDown from "../../public/icons/arrow-down.svg";
import ArrowUp from "../../public/icons/arrow-up.svg";

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
  const [name, setName] = useState<string | undefined>(undefined);
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
    name: string | undefined
  ) => {
    const data = (await PsychologistsService.lists(1, type, name)).data;
    setData(data.results);
    setPagination(1);
  };

  const fetchMoreData = async (
    pagination: number,
    type: string,
    name: string | undefined
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
    <div className="sm:w-1/4 w-full">
      <div
        className="dropdown-header cursor-pointer h-full rounded shadow-md table w-full"
        onClick={toggling}
      >
        <span className="table-cell w-1/2">
          <FormattedMessage id={`filter.${type}`} />
        </span>
        <span className="table-cell w-1/2">
          {isOpen ? (
            <ArrowUp className="float-right" />
          ) : (
            <ArrowDown className="float-right" />
          )}
        </span>
      </div>
      {isOpen && (
        <ul
          className="dropdown-list rounded"
          ref={(el) => {
            observed.current = el;
            handleObserved(el);
          }}
        >
          {type === "specializations" && (
            <SearchName name={name} handleNameChange={handleNameChange} />
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
      )}
    </div>
  );
};

export default TheDropdownBase;
