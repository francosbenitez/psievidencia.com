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
          psychologist.name.toLowerCase().includes(search.toLowerCase())
        // psychologist.name.toLowerCase().includes(search.toLowerCase()) ||
        // psychologist.specialization
        //   .toLowerCase()
        //   .includes(search.toLowerCase()) ||
        // psychologist.discipline.toLowerCase().includes(search.toLowerCase())
      );

  return (
    <div>
      <input
        className="border-solid h-10 border-2 border-indigo-600 w-full pl-3 mb-16"
        placeholder="Search by name, specialization or theorical discipline"
        onChange={handleSearchChange}
      />
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filtered.map((psychologist) => {
          return (
            <FilterCard key={psychologist.id} psychologist={psychologist} />
          );
        })}
      </div>
    </div>
  );
};

export default PsychologistsFilter;
