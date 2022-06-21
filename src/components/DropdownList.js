const DropdownList = ({ selectedOptions, handleUpdate }) => {
  return (
    <>
      {selectedOptions.map((item) => (
        <div
          key={item.id}
          className="bg-white text-indigo-500 p-2 inline mr-6 my-2"
        >
          <span>{item.specialization}</span>
          <button onClick={handleUpdate(item.id)} className="pl-2">
            X
          </button>
        </div>
      ))}
    </>
  );
};

export default DropdownList;
