import { useState } from "react";
import FilterCard from "./FilterCard";

const PsychologistsFilter = ({ psychologists }) => {
  const [search, setSearch] = useState(null);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const filtered = !search
    ? psychologists
    : psychologists.filter(
        (psychologist) =>
          psychologist.Name.toLowerCase().includes(search.toLowerCase()) ||
          psychologist.Specialization.toLowerCase().includes(
            search.toLowerCase()
          ) ||
          psychologist["Theorical discipline"]
            .toLowerCase()
            .includes(search.toLowerCase())
      );

  return (
    <div>
      <input
        className="border-solid h-10 border-2 border-indigo-600 w-full pl-3 mb-16"
        placeholder="Search by name, specialization or theorical discipline"
        onChange={handleSearchChange}
      />
      <div className="flex flex-wrap justify-between">
        {filtered.map((psychologist) => {
          return (
            <FilterCard key={psychologist.Name} psychologist={psychologist} />
          );
        })}
      </div>
    </div>
  );
};

export default PsychologistsFilter;
