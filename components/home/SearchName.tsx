import React from "react";

const SearchName = ({
  name,
  handleNameChange,
}: {
  name: string | undefined;
  handleNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <input
      className="border-solid h-10 border-2 border-indigo-600 w-full pl-3 mb-6"
      placeholder="Search by name"
      onChange={handleNameChange}
      value={name}
    />
  );
};

export default SearchName;
