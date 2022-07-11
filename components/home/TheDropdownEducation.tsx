import { useEffect, useState } from "react";
import { Data } from "../../types";
import { FormattedMessage } from "react-intl";
import ArrowDown from "../../public/icons/arrow-down.svg";
import ArrowUp from "../../public/icons/arrow-up.svg";

type Props = {
  selectedOption: Data;
  setSelectedOption: React.Dispatch<React.SetStateAction<Data | {}>>;
  data: Data[];
  setData: React.Dispatch<React.SetStateAction<Data[]>>;
};

const TheDropdownBase = ({
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

  useEffect(() => {
    const doSomething = () =>
      setData((item) =>
        item.concat([
          { id: 1, name: "licenciatura", slug: "Licentiate degree" },
          { id: 2, name: "especialidad", slug: "Specialist degree" },
          { id: 3, name: "maestria", slug: "Master's degree" },
          { id: 4, name: "doctorado", slug: "Doctoral degree" },
        ])
      );
    doSomething();
  }, []);

  return (
    <div className="sm:w-1/4 my-6 w-full">
      <div className="dropdown-header cursor-pointer h-full" onClick={toggling}>
        <FormattedMessage id="filter.education" />
        {isOpen ? <ArrowUp /> : <ArrowDown />}
      </div>
      {isOpen && (
        <div>
          <ul className="dropdown-list">
            {data.map((option) => (
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
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TheDropdownBase;
