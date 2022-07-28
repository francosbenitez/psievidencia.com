import React from "react";
import SearchName from "./SearchName";
import TheCheckbox from "./TheCheckbox";

const AllFilters = ({
  handleNameChange,
  handleHpChange,
  hasPerspective,
}: {
  handleNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleHpChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  hasPerspective: string | undefined;
}) => {
  return (
    <div className="sm:flex sm:space-x-4 sm:mb-6 justify-center">
      <div className="w-full sm:w-1/3">
        <SearchName handleNameChange={handleNameChange} />
      </div>

      <div className="w-full sm:w-1/3">
        <TheCheckbox
          handleHpChange={handleHpChange}
          hasPerspective={hasPerspective}
        />
      </div>
    </div>
  );
};

export default AllFilters;
