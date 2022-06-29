import PsychologistsService from "../services/PsychologistsService";
import useDebounce from "../hooks/useDebounce";
import { useState, useEffect } from "react";
import TheFooter from "../components/home/TheFooter";
import TheHeader from "../components/home/TheHeader";
import LoadMore from "../components/home/LoadMore";
import SearchName from "../components/home/SearchName";
import CardWrapper from "../components/home/CardWrapper";
import SelectedOptions from "../components/home/SelectedOptions";
import TheDropdown from "../components/home/TheDropdown";

const Home = () => {
  const [psychologists, setPsychologists] = useState([]);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState(null);
  const [pagination, setPagination] = useState(1);
  const [selectedSpecializationOptions, setSelectedSpecializationOptions] =
    useState([]);
  const [specializations, setSpecializations] = useState([]);
  const [specializationsPagination, setSpecializationsPagination] = useState(1);
  const [therapeuticModels, setTherapeuticModels] = useState([]);
  const [therapeuticModelsPagination, setTherapeuticModelsPagination] =
    useState(1);
  const [selectedTherapeuticModelOptions, setSelectedTherapeuticModelOptions] =
    useState([]);

  // Name
  const debouncedName = useDebounce(name, 1000);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

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

  // Psychologists
  const fetchPsychologists = async (
    name,
    specializations,
    therapeutic_models
  ) => {
    setLoading(true);
    const data = (
      await PsychologistsService.index(
        1,
        name,
        specializations,
        therapeutic_models
      )
    ).data;
    setPsychologists(data.results);
    setLoading(false);
  };

  const fetchMorePsychologists = async (
    name,
    specializations,
    therapeutic_models
  ) => {
    setLoading(true);
    const data = (
      await PsychologistsService.index(
        pagination,
        name,
        specializations,
        therapeutic_models
      )
    ).data;
    setPsychologists((psychologists) => psychologists.concat(data.results));
    setLoading(false);
  };

  const handlePagination = () => {
    setPagination(pagination + 1);
  };

  useEffect(() => {
    const selectedSpecializationIds = selectedSpecializationOptions.map(
      (item) => item.id
    );
    const selectedTherapeuticModelIds = selectedTherapeuticModelOptions.map(
      (item) => item.id
    );
    fetchPsychologists(
      debouncedName,
      selectedSpecializationIds,
      selectedTherapeuticModelIds
    );
  }, [
    debouncedName,
    selectedSpecializationOptions,
    selectedTherapeuticModelOptions,
  ]);

  useEffect(() => {
    if (pagination > 1) {
      const selectedSpecializationIds = selectedSpecializationOptions.map(
        (item) => item.id
      );
      const selectedTherapeuticModelIds = selectedTherapeuticModelOptions.map(
        (item) => item.id
      );
      fetchMorePsychologists(
        debouncedName,
        selectedSpecializationIds,
        selectedTherapeuticModelIds
      );
    }
  }, [pagination]);

  return (
    <>
      <div className="container mx-auto py-28 px-5 sm:px-0">
        <TheHeader />
        <SearchName handleNameChange={handleNameChange} />

        <div className="sm:flex sm:space-x-4">
          <TheDropdown
            type={"therapeutic model"}
            data={therapeuticModels}
            handleAdd={addSelectedTherapeuticModelOptions}
            handleUpdate={updateTherapeuticModels}
            handlePagination={handleTherapeuticModelsPagination}
          />
          <TheDropdown type={"work population"} />
          <TheDropdown
            data={specializations}
            type={"specializations"}
            handleAdd={addSelectedSpecializationOptions}
            handleUpdate={updateSpecializations}
            handlePagination={handleSpecializationsPagination}
          />
        </div>

        <div className="container my-6">
          <SelectedOptions
            selectedOptions={selectedSpecializationOptions}
            handleUpdate={updateSelectedSpecializationOptions}
            addOptions={addSpecializations}
          />
          <SelectedOptions
            selectedOptions={selectedTherapeuticModelOptions}
            handleUpdate={updateSelectedTherapeuticModelOptions}
            addOptions={addTherapeuticModels}
          />
        </div>

        {loading && <p className="grid place-items-center">Loading...</p>}

        <CardWrapper psychologists={psychologists} />

        {!loading && <LoadMore handlePagination={handlePagination} />}
      </div>
      <TheFooter />
    </>
  );
};

export default Home;
