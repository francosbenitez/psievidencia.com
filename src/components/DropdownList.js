const DropdownList = ({ selectedOptions, setSelectedOptions }) => {
  const handleUpdate = (id) => () => {
    setSelectedOptions(selectedOptions.filter((item) => item.id !== id));
  };

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
