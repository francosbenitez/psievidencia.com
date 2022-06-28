import { useState, useEffect } from "react";
import FilterCard from "./FilterCard";
import Dropdown from "./Dropdown";
import PsychologistsService from "../services/PsychologistsService";
import DropdownList from "./DropdownList";

const PsychologistsFilter = ({
  psychologists,
  loading,
  handleUpdate,
  selectedOptions,
  handleAdd,
  handleNameChange,
}) => {
  const [specializations, setSpecializations] = useState([]);
  const [pagination, setPagination] = useState(1);

  useEffect(() => {
    const fetchSpecializations = async () => {
      const data = (await PsychologistsService.specializations(1)).data;
      setSpecializations(data.results);
    };
    fetchSpecializations();
  }, []);

  const fetchMoreSpecializations = async (pagination) => {
    const data = (await PsychologistsService.specializations(pagination)).data;
    setSpecializations((item) => item.concat(data.results));
  };

  const updateSpecializations = (option) => {
    setSpecializations(
      specializations.filter(
        (specializations) => specializations.id !== option.id
      )
    );
  };

  const handlePagination = () => {
    setPagination(pagination + 1);
  };

  useEffect(() => {
    if (pagination > 1) {
      fetchMoreSpecializations(pagination);
    }
  }, [pagination]);

  const addSpecializations = (value) => {
    setSpecializations((oldArray) => [value, ...oldArray]);
  };

  return (
    <div>
      <input
        className="border-solid h-10 border-2 border-indigo-600 w-full pl-3 mb-6"
        placeholder="Search by name"
        onChange={handleNameChange}
      />

      <div className="flex space-x-4">
        <Dropdown
          specializations={specializations}
          type={"specializations"}
          handleUpdate={handleUpdate}
          selectedOptions={selectedOptions}
          handleAdd={handleAdd}
          updateSpecializations={updateSpecializations}
          handlePagination={handlePagination}
        />

        <Dropdown type={"therapeutic model"} />
        <Dropdown type={"work population"} />
      </div>

      <DropdownList
        selectedOptions={selectedOptions}
        handleUpdate={handleUpdate}
        addSpecializations={addSpecializations}
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
