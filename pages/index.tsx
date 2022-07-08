import type { NextPage } from "next";
import Head from "next/head";
import TheHeader from "../components/home/TheHeader";
import PsychologistsService from "../services/PsychologistsService";
import useDebounce from "../hooks/useDebounce";
import { useState, useEffect } from "react";
import TheFooter from "../components/home/TheFooter";
import LoadMore from "../components/home/LoadMore";
import SearchName from "../components/home/SearchName";
import TheCard from "../components/home/TheCard";
import TheDropdown from "../components/home/TheDropdown";

type Data = {
  id: number;
  name: string;
};

type Psychologist = {
  additional_data: string;
  city: string;
  date: string;
  education: string;
  email: string;
  gender: string;
  gender_perspective: string;
  id: number;
  institution: string;
  invoice: string;
  name: string;
  name_2: string;
  online: string;
  phone_number: string;
  prepaid: string;
  prepaid_type: string;
  province: string;
  registration_number: string;
  registration_type: string;
  session_languages: string;
  sign_language: string;
  social_networks: string;
  specialization: string;
  team: string;
  therapeutic_model: string;
  work_modality: string;
  work_population: string;
};

const Home: NextPage = () => {
  const [psychologists, setPsychologists] = useState([]);
  const [loading, setLoading] = useState(false);
  const [noMore, setNoMore] = useState(false);
  const [name, setName] = useState<string | null>(null);
  const [pagination, setPagination] = useState(1);
  const [selectedOptionsSp, setSelectedOptionsSp] = useState<Data[]>([]);
  const [selectedOptionsTm, setSelectedOptionsTm] = useState<Data[]>([]);
  const [selectedOptionsWp, setSelectedOptionsWp] = useState<Data[]>([]);
  const [selectedOptionEd, setSelectedOptionEd] = useState<string>("");

  const debouncedName = useDebounce(name, 1000);
  const handleNameChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    if (target) {
      setName(target.value);
    }
  };

  const fetchPsychologists = async (
    name: string | null,
    specializations: number[],
    therapeutic_models: number[],
    work_populations: number[],
    education: string
  ) => {
    setLoading(true);
    const data = (
      await PsychologistsService.index(
        1,
        name,
        specializations,
        therapeutic_models,
        work_populations,
        education
      )
    ).data;
    setPsychologists(data.results);
    setLoading(false);
    setPagination(1);
    setNoMore(false);
  };

  const fetchMorePsychologists = async (
    name: string | null,
    specializations: number[],
    therapeutic_models: number[],
    work_populations: number[],
    education: string
  ) => {
    try {
      setLoading(true);
      const data = (
        await PsychologistsService.index(
          pagination,
          name,
          specializations,
          therapeutic_models,
          work_populations,
          education
        )
      ).data;
      setPsychologists((psychologists) => psychologists.concat(data.results));
      setLoading(false);
      setNoMore(false);
    } catch (errors) {
      console.log("errors.response.data", errors.response.data);
      setLoading(false);
      setPagination(1);
      setNoMore(true);
    }
  };

  const handlePagination = () => {
    setPagination(pagination + 1);
  };

  useEffect(() => {
    const selectedOptionsIdsSp = selectedOptionsSp.map((item) => item.id);
    const selectedOptionsIdsTm = selectedOptionsTm.map((item) => item.id);
    const selectedOptionsIdsWp = selectedOptionsWp.map((item) => item.id);
    fetchPsychologists(
      debouncedName,
      selectedOptionsIdsSp,
      selectedOptionsIdsTm,
      selectedOptionsIdsWp,
      selectedOptionEd
    );
  }, [
    debouncedName,
    selectedOptionsSp,
    selectedOptionsTm,
    selectedOptionsWp,
    selectedOptionEd,
  ]);

  useEffect(() => {
    if (pagination > 1) {
      const selectedOptionsIdsSp = selectedOptionsSp.map((item) => item.id);
      const selectedOptionsIdsTm = selectedOptionsTm.map((item) => item.id);
      const selectedOptionsIdsWp = selectedOptionsWp.map((item) => item.id);
      fetchMorePsychologists(
        debouncedName,
        selectedOptionsIdsSp,
        selectedOptionsIdsTm,
        selectedOptionsIdsWp,
        selectedOptionEd
      );
    }
  }, [pagination]);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>PsiEvidencia</title>
      </Head>
      <div className="container mx-auto py-28 px-5 sm:px-0">
        <TheHeader />
        <SearchName handleNameChange={handleNameChange} />

        <TheDropdown
          selectedOptionsSp={selectedOptionsSp}
          setSelectedOptionsSp={setSelectedOptionsSp}
          selectedOptionsTm={selectedOptionsTm}
          setSelectedOptionsTm={setSelectedOptionsTm}
          selectedOptionsWp={selectedOptionsWp}
          setSelectedOptionsWp={setSelectedOptionsWp}
          selectedOptionEd={selectedOptionEd}
          setSelectedOptionEd={setSelectedOptionEd}
        />

        {loading && <p className="grid place-items-center">Loading...</p>}

        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {psychologists.map((psychologist: Psychologist) => {
            return (
              <TheCard key={psychologist.id} psychologist={psychologist} />
            );
          })}
        </div>

        {!loading && (
          <LoadMore handlePagination={handlePagination} noMore={noMore} />
        )}
      </div>
      <TheFooter />
    </>
  );
};

export default Home;
