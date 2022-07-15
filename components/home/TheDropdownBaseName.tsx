import { useEffect, useState } from "react";
import { Data } from "../../types";
import { FormattedMessage } from "react-intl";
import ArrowDown from "../../public/icons/arrow-down.svg";
import ArrowUp from "../../public/icons/arrow-up.svg";
import { useIntl } from "react-intl";
import { useRouter } from "next/router";

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
  const intl = useIntl();
  const { locale }: { locale?: any } = useRouter();

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
    const doSomething = () => {
      if (type === "education") {
        setData([
          {
            id: 1,
            name: "licenciatura",
            slug: intl.formatMessage({ id: "education.licentiate" }),
          },
          {
            id: 2,
            name: "especialidad",
            slug: intl.formatMessage({ id: "education.specialist" }),
          },
          {
            id: 3,
            name: "maestria",
            slug: intl.formatMessage({ id: "education.master" }),
          },
          {
            id: 4,
            name: "doctorado",
            slug: intl.formatMessage({ id: "education.doctoral" }),
          },
        ]);
      } else {
        setData([
          {
            id: 1,
            name: "varon",
            slug: intl.formatMessage({ id: "gender.man" }),
          },
          {
            id: 2,
            name: "mujer",
            slug: intl.formatMessage({ id: "gender.woman" }),
          },
          {
            id: 3,
            name: "no_binarie",
            slug: intl.formatMessage({ id: "gender.non_binary" }),
          },
        ]);
      }
    };
    doSomething();
  }, [locale]);

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
