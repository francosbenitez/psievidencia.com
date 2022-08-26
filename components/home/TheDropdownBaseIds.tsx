import { useEffect, useState, useRef, useCallback } from "react";
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

const TheDropdownBaseIds = ({
  type,
  setSelectedOptions,
  data,
  setData,
}: Props) => {
  const [pagination, setPagination] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);
  const [name, setName] = useState<string | undefined>(undefined);
  const debouncedName = useDebounce(name, 1000);
  const [loading, setLoading] = useState(false);

  const observer = useRef<any>();

  const lastBookElementRef = useCallback(
    (node: any) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPagination((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading]
  );

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
    setLoading(true);
    const data = (await PsychologistsService.lists(1, type, name)).data;
    setData(data.results);
    setPagination(1);
    setLoading(false);
  };

  const fetchMoreData = async (
    pagination: number,
    type: string,
    name: string | undefined
  ) => {
    setLoading(true);
    const data = (await PsychologistsService.lists(pagination, type, name))
      .data;
    setData((item) => item.concat(data.results));
    setLoading(false);
  };

  const addSelectedOptions = (value: Data) => {
    setSelectedOptions((oldArray) => [...oldArray, value]);
  };

  const updateData = (option: Data) => {
    setData(data.filter((data) => data.id !== option.id));
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
    <div className="sm:w-1/4 w-full relative">
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
          style={{ height: `${type === "specializations" && "400px"}` }}
        >
          <>
            {type === "specializations" && (
              <SearchName
                name={name}
                handleNameChange={handleNameChange}
                fixedHeight={true}
              />
            )}
            {data.map((option, index) => {
              if (data.length === index + 1) {
                return (
                  <li
                    ref={lastBookElementRef}
                    className="list-item break-words"
                    style={{
                      marginBottom: `${index === data.length - 1 && "0px"}`,
                    }}
                    onClick={() => {
                      onOptionClicked(option);
                      addSelectedOptions(option);
                    }}
                    key={option.id}
                  >
                    {option.name}
                  </li>
                );
              } else {
                return (
                  <li
                    className="list-item break-words"
                    style={{
                      marginBottom: `${index === data.length - 1 && "0px"}`,
                    }}
                    onClick={() => {
                      onOptionClicked(option);
                      addSelectedOptions(option);
                    }}
                    key={option.id}
                  >
                    {option.name}
                  </li>
                );
              }
            })}
          </>
        </ul>
      )}
    </div>
  );
};

export default TheDropdownBaseIds;
