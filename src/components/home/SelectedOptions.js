const DropdownList = ({
  selectedOptions,
  handleUpdate,
  addSpecializations,
}) => {
  return (
    <div className="container my-6">
      {selectedOptions.map((item) => (
        <div
          key={item.id}
          className="bg-white text-indigo-500 p-1.5 inline mr-6 leading-10"
        >
          <span>{item.name}</span>
          <button
            onClick={() => {
              handleUpdate(item.id);
              addSpecializations(item);
            }}
            className="pl-2"
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
};

export default DropdownList;
