import PsychologistsService from "../services/PsychologistsService";
import useDebounce from "../hooks/useDebounce";
import { useState, useEffect } from "react";
import TheFooter from "../components/home/TheFooter";
import TheHeader from "../components/home/TheHeader";
import LoadMore from "../components/home/LoadMore";
import SearchName from "../components/home/SearchName";
import TheCard from "../components/home/TheCard";
import TheDropdown from "../components/home/TheDropdown";

const Home = () => {
  const [psychologists, setPsychologists] = useState([]);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState(null);
  const [pagination, setPagination] = useState(1);

  const [selectedSpecializationOptions, setSelectedSpecializationOptions] =
    useState([]);
  const [selectedTherapeuticModelOptions, setSelectedTherapeuticModelOptions] =
    useState([]);

  // Name
  const debouncedName = useDebounce(name, 1000);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

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

        <TheDropdown
          setSelectedSpecializationOptions={setSelectedSpecializationOptions}
          setSelectedTherapeuticModelOptions={
            setSelectedTherapeuticModelOptions
          }
          selectedTherapeuticModelOptions={selectedTherapeuticModelOptions}
          selectedSpecializationOptions={selectedSpecializationOptions}
        />

        {loading && <p className="grid place-items-center">Loading...</p>}

        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {psychologists.map((psychologist) => {
            return (
              <TheCard key={psychologist.id} psychologist={psychologist} />
            );
          })}
        </div>

        {!loading && <LoadMore handlePagination={handlePagination} />}
      </div>
      <TheFooter />
    </>
  );
};

export default Home;
