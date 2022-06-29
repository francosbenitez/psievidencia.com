import Filter from "../components/Filter";
import { ReactComponent as Magnifier } from "../assets/icons/magnifier.svg";
import { ReactComponent as GitHub } from "../assets/icons/github.svg";
import PsychologistsService from "../services/PsychologistsService";
import useDebounce from "../hooks/useDebounce";
import { useState, useEffect } from "react";

const Home = () => {
  const [psychologists, setPsychologists] = useState([]);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState(null);
  const [pagination, setPagination] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const debouncedName = useDebounce(name, 1000);

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

  const handleUpdate = (id) => {
    setSelectedOptions(
      selectedOptions.filter((selectedOptions) => selectedOptions.id !== id)
    );
  };

  const handleAdd = (value) => {
    setSelectedOptions((oldArray) => [...oldArray, value]);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
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

  return (
    <>
      <div className="container mx-auto py-28 px-5 sm:px-0">
        <h1 className="text-center font-bold text-5xl">
          <Magnifier className="inline w-12 h-12" /> PsiEvidencia
        </h1>
        <h2 className="text-center text-2xl my-9">
          A web app to help you find the best evidence-based psychologists
        </h2>
        <Filter
          psychologists={psychologists}
          loading={loading}
          handleUpdate={handleUpdate}
          selectedOptions={selectedOptions}
          handleAdd={handleAdd}
          handleNameChange={handleNameChange}
        />
        {!loading && (
          <div className="flex justify-center my-3">
            <button
              onClick={handlePagination}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Load more
            </button>
          </div>
        )}
      </div>
      <footer className="bottom-0 fixed bg-white w-full p-8 text-center">
        To be part of this collection, fill your data in{" "}
        <a
          className="underline"
          target="_blank"
          rel="noreferrer"
          href="https://docs.google.com/forms/d/e/1FAIpQLSccyO5jICweFShGTLEEiCOYLYySlEUacI0_4IDCY10AdYqIpA/viewform"
        >
          this Google Forms
        </a>{" "}
        |{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/francosbenitez/psievidencia"
        >
          <span className="underline">Source code</span>{" "}
          <GitHub className="inline w-4 h-4" />
        </a>
      </footer>
    </>
  );
};

export default Home;
