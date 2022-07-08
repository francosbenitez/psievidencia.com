type Props = {
  selectedOptions: Data[];
  setSelectedOptions: React.Dispatch<React.SetStateAction<Data[]>>;
  setData: React.Dispatch<React.SetStateAction<Data[]>>;
};

type Data = {
  id: number;
  name: string;
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
          className="bg-white text-indigo-500 p-1.5 inline mr-6 leading-10"
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
