const DropdownList = ({ selectedOptions, handleUpdate }) => {
  return (
    <>
      {selectedOptions.map((item) => (
        <div key={item.id}>
          <span>{item.specialization}</span>
          <button onClick={handleUpdate(item.id)}>X</button>
        </div>
      ))}
    </>
  );
};

export default DropdownList;
