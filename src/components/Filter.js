import { useState, useEffect } from "react";
import FilterCard from "./FilterCard";
import Dropdown from "./Dropdown";
import PsychologistsService from "../services/PsychologistsService";

const PsychologistsFilter = ({
  psychologists,
  loading,
  handleUpdate,
  selectedOptions,
  handleAdd,
}) => {
  const [search, setSearch] = useState(null);
  const [specializations, setSpecializations] = useState([]);

  useEffect(() => {
    const fetchSpecializations = async () => {
      const data = (await PsychologistsService.specializations()).data;
      setSpecializations((item) => item.concat(data.results));
    };
    fetchSpecializations();
  }, []);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <input
        className="border-solid h-10 border-2 border-indigo-600 w-full pl-3 mb-6"
        placeholder="Search by name"
        onChange={handleSearchChange}
      />

      <Dropdown
        data={specializations}
        type={"specializations"}
        handleUpdate={handleUpdate}
        selectedOptions={selectedOptions}
        handleAdd={handleAdd}
      />

      {loading && <p className="grid place-items-center">Loading...</p>}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {psychologists.map((psychologist) => {
          return (
            <FilterCard key={psychologist.id} psychologist={psychologist} />
          );
        })}
      </div>
    </div>
  );
};

export default PsychologistsFilter;
