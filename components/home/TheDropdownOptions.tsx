import { Data } from "../../types";

type Props = {
  selectedOptions: Data[];
  setSelectedOptions: React.Dispatch<React.SetStateAction<Data[]>>;
  setData: React.Dispatch<React.SetStateAction<Data[]>>;
};

const TheDropdownOptions = ({
  selectedOptions,
  setSelectedOptions,
  setData,
}: Props) => {
  const addOptions = (value: Data) => {
    setData((oldArray) => [value, ...oldArray]);
  };

  const removeSelectedOptions = (id: number) => {
    setSelectedOptions(
      selectedOptions.filter((selectedOptions) => selectedOptions.id !== id)
    );
  };

  return (
    <>
      {selectedOptions.map((item) => (
        <div
          key={item.id}
          className="bg-white text-primary p-1.5 inline mr-6 leading-10 mt-6"
        >
          <span>{item.name}</span>
          <button
            onClick={() => {
              removeSelectedOptions(item.id);
              addOptions(item);
            }}
            className="pl-2"
          >
            X
          </button>
        </div>
      ))}
    </>
  );
};

export default TheDropdownOptions;
