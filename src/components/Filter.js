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
        className="border-solid border-2 border-indigo-600"
        placeholder="Search by name"
        onChange={handleSearchChange}
      />
      {filtered.map((psychologist) => {
        return (
          <FilterCard key={psychologist.Name} psychologist={psychologist} />
        );
      })}
    </div>
  );
};

export default PsychologistsFilter;
