import { useState, useEffect } from "react";
import FilterCard from "./FilterCard";
import PsychologistsService from "../services/PsychologistsService";

const PsychologistsFilter = ({ psychologists, loading }) => {
  const [search, setSearch] = useState(null);
  const [specialization, setSpecialization] = useState("");
  const [specializations, setSpecializations] = useState([]);

  const fetchSpecializations = async () => {
    const data = (await PsychologistsService.specializations()).data;

    setSpecializations((item) => item.concat(data));
  };

  useEffect(() => {
    fetchSpecializations();
  }, []);

  const handleSpecializationChange = (e) => {
    setSpecialization(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const filtered = !search
    ? psychologists
    : psychologists.filter(
        (psychologist) =>
          psychologist.name_2
            .toLowerCase()
            .normalize("NFD")
            .replace(/\p{Diacritic}/gu, "")
            .includes(
              search
                .toLowerCase()
                .normalize("NFD")
                .replace(/\p{Diacritic}/gu, "")
            ) ||
          psychologist.therapeutic_model
            .toLowerCase()
            .normalize("NFD")
            .replace(/\p{Diacritic}/gu, "")
            .includes(
              search
                .toLowerCase()
                .normalize("NFD")
                .replace(/\p{Diacritic}/gu, "")
            ) ||
          psychologist.work_population
            .toLowerCase()
            .normalize("NFD")
            .replace(/\p{Diacritic}/gu, "")
            .includes(
              search
                .toLowerCase()
                .normalize("NFD")
                .replace(/\p{Diacritic}/gu, "")
            ) ||
          psychologist.specialization
            .toLowerCase()
            .normalize("NFD")
            .replace(/\p{Diacritic}/gu, "")
            .includes(
              search
                .toLowerCase()
                .normalize("NFD")
                .replace(/\p{Diacritic}/gu, "")
            )
      );

  return (
    <div>
      <input
        className="border-solid h-10 border-2 border-indigo-600 w-full pl-3 mb-16"
        placeholder="Search by name, therapeutic model, work population or specialization"
        onChange={handleSearchChange}
      />

      <select value={specialization} onChange={handleSpecializationChange}>
        {specializations.map((option) => (
          <option key={option.id} value={option.specialization}>
            {option.specialization}
          </option>
        ))}
      </select>

      {loading && <p className="grid place-items-center">Loading...</p>}
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
