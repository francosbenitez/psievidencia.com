import React from "react";
import { useState, useEffect } from "react";
import { Data } from "../../types";

type Props = {
  data: Data[];
  setData: React.Dispatch<React.SetStateAction<Data[]>>;
  selectedOptionEd: string;
  setSelectedOptionEd: React.Dispatch<React.SetStateAction<string>>;
};

const TheDropdownEducation = ({
  data,
  setData,
  selectedOptionEd,
  setSelectedOptionEd,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value: Data) => () => {
    setSelectedOptionEd(value.name);
    setIsOpen(false);
  };

  useEffect(() => {
    const doSomething = () =>
      setData((item) =>
        item.concat([
          { id: 1, name: "", slug: "All" },
          { id: 2, name: "licenciatura", slug: "Licentiate degree" },
          { id: 3, name: "especialidad", slug: "Specialist degree" },
          { id: 4, name: "maestria", slug: "Master's degree" },
          { id: 5, name: "doctorado", slug: "Doctoral degree" },
        ])
      );
    doSomething();
  }, []);

  const getFormattedData = () => {
    if (selectedOptionEd) {
      return data.filter((item) => item.name === selectedOptionEd)[0].slug;
    }
    return false;
  };

  return (
    <div className="sm:w-1/4 my-6 w-full">
      <div className="dropdown-header cursor-pointer h-full" onClick={toggling}>
        {getFormattedData() || "Filter by education"}
      </div>
      {isOpen && (
        <div className="dropdown-list-container">
          <ul className="dropdown-list">
            {data.map((item) => (
              <li
                className="list-item"
                onClick={onOptionClicked(item)}
                key={item.id}
              >
                {item.slug}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TheDropdownEducation;
