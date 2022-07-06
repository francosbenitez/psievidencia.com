const TheDropdownOptions = ({
  selectedOptions,
  setSelectedOptions,
  setData,
}) => {
  const addOptions = (value) => {
    setData((oldArray) => [value, ...oldArray]);
  };

  const removeSelectedOptions = (id) => {
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
