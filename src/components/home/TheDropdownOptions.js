const DropdownList = ({ selectedOptions, handleUpdate, addOptions }) => {
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
              handleUpdate(item.id);
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

export default DropdownList;
