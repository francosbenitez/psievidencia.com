const DropdownList = ({ selectedOptions, handleUpdate }) => {
  return (
    <div className="container my-6">
      {selectedOptions.map((item) => (
        <div
          key={item.id}
          className="bg-white text-indigo-500 p-1.5 inline mr-6 leading-10"
        >
          <span>{item.specialization}</span>
          <button onClick={handleUpdate(item.id)} className="pl-2">
            X
          </button>
        </div>
      ))}
    </div>
  );
};

export default DropdownList;
