import { useState } from "react";

const PsychologistsFilter = ({ psychologists }) => {
  const [search, setSearch] = useState("");

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
          <p key={psychologist.Name}>
            {psychologist.Name} - {psychologist.Name}
          </p>
        );
      })}
    </div>
  );
};

export default PsychologistsFilter;
