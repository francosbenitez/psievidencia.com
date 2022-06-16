import { useState, useEffect } from "react";
import FilterCard from "./FilterCard";
import PsychologistsService from "../services/PsychologistsService";

const PsychologistsFilter = ({ psychologists, loading }) => {
  const [search, setSearch] = useState(null);
  const [specializations, setSpecializations] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);
  const onOptionClicked = (value) => () => {
    setSelectedOption(value.specialization);
    setIsOpen(false);
  };

  useEffect(() => {
    const fetchSpecializations = async () => {
      const data = (await PsychologistsService.specializations()).data;
      setSpecializations((item) => item.concat(data));
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

      <div className="dropdown-container">
        <div className="dropdown-header" onClick={toggling}>
          {selectedOption || "Trastornos del estado del ánimo"}
        </div>
        {isOpen && (
          <div className="dropdown-list-container">
            <ul className="dropdown-list">
              {specializations.map((option) => (
                <li
                  className="list-item"
                  onClick={onOptionClicked(option)}
                  key={option.id}
                >
                  {option.specialization}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

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
