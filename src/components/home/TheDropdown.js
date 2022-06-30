import { useState, useEffect } from "react";
import TheDropdownOptions from "./TheDropdownOptions";
import TheDropdownBase from "./TheDropdownBase";
import PsychologistsService from "../../services/PsychologistsService";

const TheDropdown = ({
  setSelectedTherapeuticModelOptions,
  setSelectedSpecializationOptions,
  selectedSpecializationOptions,
  selectedTherapeuticModelOptions,
}) => {
  const [specializations, setSpecializations] = useState([]);
  const [specializationsPagination, setSpecializationsPagination] = useState(1);
  const [therapeuticModels, setTherapeuticModels] = useState([]);
  const [therapeuticModelsPagination, setTherapeuticModelsPagination] =
    useState(1);

  // Specializations
  const fetchSpecializations = async () => {
    const data = (await PsychologistsService.specializations(1)).data;
    setSpecializations(data.results);
  };

  const fetchMoreSpecializations = async (pagination) => {
    const data = (await PsychologistsService.specializations(pagination)).data;
    setSpecializations((item) => item.concat(data.results));
  };

  const addSpecializations = (value) => {
    setSpecializations((oldArray) => [value, ...oldArray]);
  };

  const updateSpecializations = (option) => {
    setSpecializations(
      specializations.filter(
        (specializations) => specializations.id !== option.id
      )
    );
  };

  const handleSpecializationsPagination = () => {
    setSpecializationsPagination(specializationsPagination + 1);
  };

  const updateSelectedSpecializationOptions = (id) => {
    setSelectedSpecializationOptions(
      selectedSpecializationOptions.filter(
        (selectedSpecializationOptions) =>
          selectedSpecializationOptions.id !== id
      )
    );
  };

  const addSelectedSpecializationOptions = (value) => {
    setSelectedSpecializationOptions((oldArray) => [...oldArray, value]);
  };

  useEffect(() => {
    fetchSpecializations();
  }, []);

  useEffect(() => {
    if (specializationsPagination > 1) {
      fetchMoreSpecializations(specializationsPagination);
    }
  }, [specializationsPagination]);

  // Therapeutic models
  const fetchTherapeuticModels = async () => {
    const data = (await PsychologistsService.therapeuticModels(1)).data;
    setTherapeuticModels(data.results);
  };

  const fetchMoreTherapeuticModels = async (pagination) => {
    const data = (await PsychologistsService.therapeuticModels(pagination))
      .data;
    setTherapeuticModels((item) => item.concat(data.results));
  };

  const addTherapeuticModels = (value) => {
    setTherapeuticModels((oldArray) => [value, ...oldArray]);
  };

  const updateTherapeuticModels = (option) => {
    setTherapeuticModels(
      therapeuticModels.filter(
        (therapeuticModels) => therapeuticModels.id !== option.id
      )
    );
  };

  const handleTherapeuticModelsPagination = () => {
    setTherapeuticModelsPagination(therapeuticModelsPagination + 1);
  };

  const updateSelectedTherapeuticModelOptions = (id) => {
    setSelectedTherapeuticModelOptions(
      selectedTherapeuticModelOptions.filter(
        (selectedTherapeuticModelOptions) =>
          selectedTherapeuticModelOptions.id !== id
      )
    );
  };

  const addSelectedTherapeuticModelOptions = (value) => {
    setSelectedTherapeuticModelOptions((oldArray) => [...oldArray, value]);
  };

  useEffect(() => {
    fetchTherapeuticModels();
  }, []);

  useEffect(() => {
    if (therapeuticModelsPagination > 1) {
      fetchMoreTherapeuticModels(therapeuticModelsPagination);
    }
  }, [therapeuticModelsPagination]);

  return (
    <>
      <div className="sm:flex sm:space-x-4">
        <TheDropdownBase
          type={"therapeutic model"}
          data={therapeuticModels}
          handleAdd={addSelectedTherapeuticModelOptions}
          handleUpdate={updateTherapeuticModels}
          handlePagination={handleTherapeuticModelsPagination}
        />
        <TheDropdownBase type={"work population"} />
        <TheDropdownBase
          data={specializations}
          type={"specializations"}
          handleAdd={addSelectedSpecializationOptions}
          handleUpdate={updateSpecializations}
          handlePagination={handleSpecializationsPagination}
        />
      </div>

      <div className="container my-6">
        <TheDropdownOptions
          selectedOptions={selectedSpecializationOptions}
          handleUpdate={updateSelectedSpecializationOptions}
          addOptions={addSpecializations}
        />
        <TheDropdownOptions
          selectedOptions={selectedTherapeuticModelOptions}
          handleUpdate={updateSelectedTherapeuticModelOptions}
          addOptions={addTherapeuticModels}
        />
      </div>
    </>
  );
};

export default TheDropdown;
