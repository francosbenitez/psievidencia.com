import { Data } from "../../types";

type Props = {
  selectedOption: Data;
  setSelectedOption: React.Dispatch<React.SetStateAction<Data | {}>>;
  setData: React.Dispatch<React.SetStateAction<Data[]>>;
};

const TheDropdownOptions = ({
  selectedOption,
  setSelectedOption,
  setData,
}: Props) => {
  const addOptions = (value: Data) => {
    setData((oldArray) => [value, ...oldArray]);
  };

  const removeSelectedOption = () => {
    setSelectedOption({});
  };

  return (
    <>
      {Object.keys(selectedOption).length > 0 && (
        <div
          key={selectedOption.id}
          className="bg-white text-indigo-500 p-1.5 inline mr-6 leading-10"
        >
          <span>{selectedOption.slug}</span>
          <button
            onClick={() => {
              removeSelectedOption();
              addOptions(selectedOption);
            }}
            className="pl-2"
          >
            X
          </button>
        </div>
      )}
    </>
  );
};

export default TheDropdownOptions;
