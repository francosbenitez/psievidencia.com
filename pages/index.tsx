// import type { NextPage } from "next";
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
import { FormattedMessage } from "react-intl";
import TheCheckbox from "../components/home/TheCheckbox";
import { useSelector } from "react-redux";
import TheModal from "../components/global/TheModal";
import DropdownBtn from "../components/global/DropdownBtn";

const Home = ({
  loading,
  setLoading,
}: {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [psychologists, setPsychologists] = useState([]);
  const [loadingMore, setLoadingMore] = useState(false);
  const [noMore, setNoMore] = useState(false);
  const [name, setName] = useState<string | undefined>(undefined);
  const [hasPerspective, setHasPerspective] = useState<string | undefined>(
    "si"
  );
  const [pagination, setPagination] = useState(1);
  const [selectedOptionsSp, setSelectedOptionsSp] = useState<Data[]>([]);
  const [selectedOptionsTm, setSelectedOptionsTm] = useState<Data[]>([]);
  const [selectedOptionsWp, setSelectedOptionsWp] = useState<Data[]>([]);
  const [selectedOptionsWm, setSelectedOptionsWm] = useState<Data[]>([]);
  const [selectedOptionEd, setSelectedOptionEd] = useState<any>({});
  const [selectedOptionGi, setSelectedOptionGi] = useState<any>({});

  const { userInfo } = useSelector((state: any) => state.userReducer);

  const debouncedName = useDebounce(name, 1000);
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    if (target) {
      setName(target.value);
    }
  };

  const handleHpChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    if (target) {
      if (target.checked) {
        setHasPerspective("si");
      } else {
        setHasPerspective("no");
      }
    }
  };

  const createVariables = () => {
    const selectedOptionsIdsSp = selectedOptionsSp.map((item) => item.id);
    const selectedOptionsIdsTm = selectedOptionsTm.map((item) => item.id);
    const selectedOptionsIdsWp = selectedOptionsWp.map((item) => item.id);
    const selectedOptionsIdsWm = selectedOptionsWm.map((item) => item.id);
    const selectedOptionNameEd = selectedOptionEd.name;
    const selectedOptionNameGi = selectedOptionGi.name;
    return {
      selectedOptionsIdsSp,
      selectedOptionsIdsTm,
      selectedOptionsIdsWp,
      selectedOptionsIdsWm,
      selectedOptionNameEd,
      selectedOptionNameGi,
    };
  };

  const {
    selectedOptionsIdsSp,
    selectedOptionsIdsTm,
    selectedOptionsIdsWp,
    selectedOptionsIdsWm,
    selectedOptionNameEd,
    selectedOptionNameGi,
  } = createVariables();

  const fetchPsychologists = async () => {
    setLoading(true);
    const data = (
      await PsychologistsService.index(
        1,
        debouncedName,
        selectedOptionsIdsSp,
        selectedOptionsIdsTm,
        selectedOptionsIdsWp,
        selectedOptionsIdsWm,
        selectedOptionNameEd,
        selectedOptionNameGi,
        hasPerspective
      )
    ).data;
    setPsychologists(data.results);
    setLoading(false);
    setPagination(1);
    setNoMore(false);
  };

  const fetchMorePsychologists = async () => {
    try {
      setLoadingMore(true);
      const data = (
        await PsychologistsService.index(
          pagination,
          debouncedName,
          selectedOptionsIdsSp,
          selectedOptionsIdsTm,
          selectedOptionsIdsWp,
          selectedOptionsIdsWm,
          selectedOptionNameEd,
          selectedOptionNameGi,
          hasPerspective
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
    fetchPsychologists();
  }, [
    debouncedName,
    selectedOptionsSp,
    selectedOptionsTm,
    selectedOptionsWp,
    selectedOptionsWm,
    selectedOptionEd,
    selectedOptionGi,
    hasPerspective,
    userInfo,
  ]);

  useEffect(() => {
    if (pagination > 1) {
      fetchMorePsychologists();
    }
  }, [pagination]);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Psievidencia</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Una aplicación web para ayudarte a encontrar a los mejores psicólogos basados en la evidencia."
        />
        <meta name="keywords" content="psievidencia psicologia evidencia" />
        <meta
          name="google-site-verification"
          content="SunVWUveAt2rjkQwOP05PRn3LsPQ8T24-Aji_ACkSik"
        />
        {/* <meta name="twitter:image:src" content="" />
        <meta property="og:image" content="" /> */}
      </Head>
      <div className="container mx-auto px-5 sm:px-0 pt-20 pb-40 main-content">
        <TheHeader />

        <div className="sm:flex sm:space-x-4 sm:mb-6 justify-center">
          <div className="w-full sm:w-1/3">
            <SearchName handleNameChange={handleNameChange} />
          </div>

          <div className="w-full sm:w-1/3">
            <TheCheckbox
              handleHpChange={handleHpChange}
              hasPerspective={hasPerspective}
            />
          </div>
        </div>

        <TheDropdown
          className="hidden sm:block"
          selectedOptionsSp={selectedOptionsSp}
          setSelectedOptionsSp={setSelectedOptionsSp}
          selectedOptionsTm={selectedOptionsTm}
          setSelectedOptionsTm={setSelectedOptionsTm}
          selectedOptionsWp={selectedOptionsWp}
          setSelectedOptionsWp={setSelectedOptionsWp}
          selectedOptionsWm={selectedOptionsWm}
          setSelectedOptionsWm={setSelectedOptionsWm}
          selectedOptionEd={selectedOptionEd}
          setSelectedOptionEd={setSelectedOptionEd}
          selectedOptionGi={selectedOptionGi}
          setSelectedOptionGi={setSelectedOptionGi}
        />

        <TheModal
          modalCentered={true}
          className="sm:hidden"
          button={<DropdownBtn />}
          title={"Filtrar"}
          content={
            <TheDropdown
              selectedOptionsSp={selectedOptionsSp}
              setSelectedOptionsSp={setSelectedOptionsSp}
              selectedOptionsTm={selectedOptionsTm}
              setSelectedOptionsTm={setSelectedOptionsTm}
              selectedOptionsWp={selectedOptionsWp}
              setSelectedOptionsWp={setSelectedOptionsWp}
              selectedOptionsWm={selectedOptionsWm}
              setSelectedOptionsWm={setSelectedOptionsWm}
              selectedOptionEd={selectedOptionEd}
              setSelectedOptionEd={setSelectedOptionEd}
              selectedOptionGi={selectedOptionGi}
              setSelectedOptionGi={setSelectedOptionGi}
            />
          }
        />

        {psychologists != null && psychologists.length > 0 ? (
          <>
            <div className="mt-6 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {psychologists.map((psychologist: Psychologist) => {
                return (
                  <TheCard
                    key={psychologist.id}
                    psychologist={psychologist}
                    update={fetchPsychologists}
                  />
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
          </>
        ) : (
          <div className="grid place-items-center text-2xl h-56">
            <FormattedMessage id="no.results" />
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
