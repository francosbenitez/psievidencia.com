import type { NextPage } from "next";
import Head from "next/head";
import TheHeader from "../components/home/TheHeader";
import PsychologistsService from "../services/PsychologistsService";
import useDebounce from "../hooks/useDebounce";
import { useState, useEffect } from "react";
import LoadMore from "../components/home/LoadMore";
import SearchName from "../components/home/SearchName";
import TheCard from "../components/home/TheCard";
import TheDropdown from "../components/home/TheDropdown";
import { Psychologist, Data } from "../types";
import LoadingSpinner from "../components/home/LoadingSpinner";

const Home: NextPage = () => {
  const [psychologists, setPsychologists] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [noMore, setNoMore] = useState(false);
  const [name, setName] = useState<string | undefined>(undefined);
  const [pagination, setPagination] = useState(1);
  const [selectedOptionsSp, setSelectedOptionsSp] = useState<Data[]>([]);
  const [selectedOptionsTm, setSelectedOptionsTm] = useState<Data[]>([]);
  const [selectedOptionsWp, setSelectedOptionsWp] = useState<Data[]>([]);
  const [selectedOptionEd, setSelectedOptionEd] = useState<any>({});

  const debouncedName = useDebounce(name, 1000);
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    if (target) {
      setName(target.value);
    }
  };

  const fetchPsychologists = async (
    name: string | undefined,
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
    name: string | undefined,
    specializations: number[],
    therapeutic_models: number[],
    work_populations: number[],
    education: string
  ) => {
    try {
      setLoadingMore(true);
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
      setLoadingMore(false);
      setNoMore(false);
    } catch (errors) {
      console.log("errors.response.data", errors.response.data);
      setLoadingMore(false);
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
    const selectedOptionNameEd = selectedOptionEd.name;
    fetchPsychologists(
      debouncedName,
      selectedOptionsIdsSp,
      selectedOptionsIdsTm,
      selectedOptionsIdsWp,
      selectedOptionNameEd
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
      const selectedOptionNameEd = selectedOptionEd.name;
      fetchMorePsychologists(
        debouncedName,
        selectedOptionsIdsSp,
        selectedOptionsIdsTm,
        selectedOptionsIdsWp,
        selectedOptionNameEd
      );
    }
  }, [pagination]);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>PsiEvidencia</title>
        <meta
          name="description"
          content="Una aplicación web para ayudarte a encontrar a los mejores psicólogos basados en la evidencia."
        />
        <meta name="keywords" content="psievidencia psicologia evidencia" />
        <meta
          name="google-site-verification"
          content="SunVWUveAt2rjkQwOP05PRn3LsPQ8T24-Aji_ACkSik"
        />
        <link
          rel="alternate"
          href="http://psievidencia.com"
          hrefLang="x-default"
        />
        <link rel="alternate" href="http://psievidencia.com" hrefLang="es" />
        <link rel="alternate" href="http://psievidencia.com/en" hrefLang="en" />
      </Head>
      <div className="container mx-auto px-5 sm:px-0 pt-20 pb-40">
        <TheHeader />

        <div className="w-full sm:w-1/3 m-auto">
          <SearchName handleNameChange={handleNameChange} />
        </div>

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

        {loading && (
          <div className="grid place-items-center">
            <LoadingSpinner />
          </div>
        )}

        <div className="mt-6 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {psychologists.map((psychologist: Psychologist) => {
            return (
              <TheCard key={psychologist.id} psychologist={psychologist} />
            );
          })}
        </div>
        {!loading && (
          <LoadMore
            handlePagination={handlePagination}
            noMore={noMore}
            loadingMore={loadingMore}
          />
        )}
      </div>
    </>
  );
};

export default Home;
