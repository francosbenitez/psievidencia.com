import { useEffect, useState, useRef, useCallback } from "react";
import PsychologistsService from "../../services/PsychologistsService";
import { Data } from "../../types";
import { FormattedMessage } from "react-intl";
import ArrowDown from "../../public/icons/arrow-down.svg";
import ArrowUp from "../../public/icons/arrow-up.svg";

type Props = {
  type: string;
  selectedOption: Data;
  setSelectedOption: React.Dispatch<React.SetStateAction<Data | {}>>;
  data: Data[];
  setData: React.Dispatch<React.SetStateAction<Data[]>>;
};

const TheDropdownBaseNamePr = ({
  type,
  setSelectedOption,
  data,
  setData,
  selectedOption,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);
  const [pagination, setPagination] = useState(1);
  const [loading, setLoading] = useState(false);

  const addSelectedOptions = (value: Data) => {
    if (Object.keys(selectedOption).length > 0) {
      addOptions(selectedOption);
    }
    setSelectedOption(value);
  };

  const addOptions = (value: Data) => {
    setData((oldArray) => [value, ...oldArray]);
  };

  const updateData = (option: Data) => {
    setData(data.filter((data) => data.id !== option.id));
  };

  const onOptionClicked = (option: Data) => {
    updateData(option);
    setIsOpen(false);
  };

  const fetchData = async (pagination: number, type: string) => {
    setLoading(true);
    const data = (await PsychologistsService.lists(1, type, undefined)).data;
    setData(data.results);
    setPagination(1);
    setLoading(false);
  };

  const fetchMoreData = async (pagination: number, type: string) => {
    setLoading(true);
    const data = (await PsychologistsService.lists(pagination, type, undefined))
      .data;
    setData((item) => item.concat(data.results));
    setLoading(false);
  };

  useEffect(() => {
    fetchData(pagination, "provinces");
  }, []);

  useEffect(() => {
    if (pagination > 1) {
      fetchMoreData(pagination, "provinces");
    }
  }, [pagination]);

  const observer = useRef<any>();

  const lastElementRef = useCallback(
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

  return (
    <div className="sm:w-1/4 w-full relative drop">
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
        <div>
          <ul className="dropdown-list" style={{ height: "300px" }}>
            {data.map((option, i) => {
              if (data.length === i + 1) {
                return (
                  <li
                    ref={lastElementRef}
                    className="list-item break-words"
                    onClick={() => {
                      onOptionClicked(option);
                      addSelectedOptions(option);
                    }}
                    key={option.id}
                  >
                    {option.slug}
                  </li>
                );
              } else {
                return (
                  <li
                    className="list-item break-words"
                    onClick={() => {
                      onOptionClicked(option);
                      addSelectedOptions(option);
                    }}
                    key={option.id}
                  >
                    {option.slug}
                  </li>
                );
              }
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TheDropdownBaseNamePr;
