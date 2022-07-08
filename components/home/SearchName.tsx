import React from "react";

const SearchName = ({ handleNameChange }: { handleNameChange: () => void }) => {
  return (
    <input
      className="border-solid h-10 border-2 border-indigo-600 w-full pl-3 mb-6"
      placeholder="Search by name"
      onChange={handleNameChange}
    />
  );
};

export default SearchName;
