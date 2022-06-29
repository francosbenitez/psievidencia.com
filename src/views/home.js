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
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [specializations, setSpecializations] = useState([]);
  const [specializationsPagination, setSpecializationsPagination] = useState(1);

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

  useEffect(() => {
    fetchSpecializations();
  }, []);

  useEffect(() => {
    if (specializationsPagination > 1) {
      fetchMoreSpecializations(specializationsPagination);
    }
  }, [specializationsPagination]);

  // Psychologists
  const fetchPsychologists = async (name, specializations) => {
    setLoading(true);
    const data = (await PsychologistsService.index(1, name, specializations))
      .data;
    setPsychologists(data.results);
    setLoading(false);
  };

  const fetchMorePsychologists = async (name, specializations) => {
    setLoading(true);
    const data = (
      await PsychologistsService.index(pagination, name, specializations)
    ).data;
    setPsychologists((psychologists) => psychologists.concat(data.results));
    setLoading(false);
  };

  const handlePagination = () => {
    setPagination(pagination + 1);
  };

  useEffect(() => {
    const selectedIds = selectedOptions.map((item) => item.id);
    fetchPsychologists(debouncedName, selectedIds);
  }, [debouncedName, selectedOptions]);

  useEffect(() => {
    if (pagination > 1) {
      const selectedIds = selectedOptions.map((item) => item.id);
      fetchMorePsychologists(debouncedName, selectedIds);
    }
  }, [pagination]);

  // Selected options
  const handleUpdate = (id) => {
    setSelectedOptions(
      selectedOptions.filter((selectedOptions) => selectedOptions.id !== id)
    );
  };

  const handleAdd = (value) => {
    setSelectedOptions((oldArray) => [...oldArray, value]);
  };

  return (
    <>
      <div className="container mx-auto py-28 px-5 sm:px-0">
        <TheHeader />
        <SearchName handleNameChange={handleNameChange} />

        <div className="sm:flex sm:space-x-4">
          <TheDropdown type={"therapeutic model"} />
          <TheDropdown type={"work population"} />
          <TheDropdown
            data={specializations}
            type={"specializations"}
            handleAdd={handleAdd}
            handleUpdate={updateSpecializations}
            handlePagination={handleSpecializationsPagination}
          />
        </div>

        <SelectedOptions
          selectedOptions={selectedOptions}
          handleUpdate={handleUpdate}
          addSpecializations={addSpecializations}
        />

        {loading && <p className="grid place-items-center">Loading...</p>}

        <CardWrapper psychologists={psychologists} />

        {!loading && <LoadMore handlePagination={handlePagination} />}
      </div>
      <TheFooter />
    </>
  );
};

export default Home;
