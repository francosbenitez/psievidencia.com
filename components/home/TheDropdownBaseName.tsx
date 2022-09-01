import { useState } from "react";
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

const TheDropdownBaseName = ({
  type,
  setSelectedOption,
  data,
  setData,
  selectedOption,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);

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
          <ul className="dropdown-list">
            {data.map((option, i) => (
              <li
                className="list-item break-words"
                style={{ marginBottom: `${i === data.length - 1 && "0px"}` }}
                onClick={() => {
                  onOptionClicked(option);
                  addSelectedOptions(option);
                }}
                key={option.id}
              >
                {option.slug}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TheDropdownBaseName;
