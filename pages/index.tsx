// import type { NextPage } from "next";
import Head from "next/head";
import TheHeader from "../components/home/TheHeader";
import PsychologistsService from "../services/PsychologistsService";
import useDebounce from "../hooks/useDebounce";
import LoadMore from "../components/home/LoadMore";
import TheCard from "../components/home/TheCard";
import { Psychologist, Data } from "../types";
import { FormattedMessage } from "react-intl";
import { useSelector } from "react-redux";
import TheModalFull from "../components/global/TheModalFull";
import DropdownBtn from "../components/global/DropdownBtn";
import AllFilters from "../components/home/AllFilters";
import TheDropdownOptionsIds from "../components/home/TheDropdownOptionsIds";
import TheDropdownOptionsName from "../components/home/TheDropdownOptionsName";
import React, { useState, useEffect, useImperativeHandle } from "react";
import { useIntl } from "react-intl";
// import UsersService from "@/services/UsersService";
// import LoadingSpinner from "@/components/home/LoadingSpinner";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { GI, ED, WM } from "@/utils/constants";
import Script from "next/script";

const Home = (props: any, ref: any) => {
  const intl = useIntl();
  const {
    loading,
    setLoading,
    showLogin,
  }: {
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    showLogin: any;
  } = props;

  useImperativeHandle(ref, () => ({
    getAlert() {
      showLogin();
    },
  }));

  // const [hasDataLoaded, setHasDataLoaded] = useState(false);
  // const [hasVerifiedToken, setHasVerifiedToken] = useState<boolean>(false);
  const [psychologists, setPsychologists] = useState([]);
  const [count, setCount] = useState(null);
  const [loadingMore, setLoadingMore] = useState(false);
  const [noMore, setNoMore] = useState(false);
  const [name, setName] = useState<string | undefined>(undefined);
  const [hasPerspective, setHasPerspective] = useState<string | undefined>(
    "all"
  );
  const [hasPrepaid, setHasPrepaid] = useState<string | undefined>("all");
  const [pagination, setPagination] = useState(1);
  const [selectedOptionsSp, setSelectedOptionsSp] = useState<Data[]>([]);
  const [selectedOptionsTm, setSelectedOptionsTm] = useState<Data[]>([]);
  const [selectedOptionsWp, setSelectedOptionsWp] = useState<Data[]>([]);
  const [selectedOptionsWm, setSelectedOptionsWm] = useState<Data[]>([]);
  const [selectedOptionEd, setSelectedOptionEd] = useState<any>({});
  const [selectedOptionPr, setSelectedOptionPr] = useState<any>({});
  const [selectedOptionGi, setSelectedOptionGi] = useState<any>({});

  const [sp, setSp] = useState<Data[]>([]);
  const [tm, setTm] = useState<Data[]>([]);
  const [wp, setWp] = useState<Data[]>([]);
  const [wm, setWm] = useState<Data[]>(WM);
  const [ed, setEd] = useState<Data[]>(ED);
  const [pr, setPr] = useState<Data[]>([]);
  const [gi, setGi] = useState<Data[]>(GI);

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
        setHasPerspective("all");
      }
    }
  };

  const handlePdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    if (target) {
      if (target.checked) {
        setHasPrepaid("si");
      } else {
        setHasPrepaid("all");
      }
    }
  };

  const createVariables = () => {
    const selectedOptionsIdsSp = selectedOptionsSp.map((item) => item.id);
    const selectedOptionsIdsTm = selectedOptionsTm.map((item) => item.id);
    const selectedOptionsIdsWp = selectedOptionsWp.map((item) => item.id);
    const selectedOptionsIdsWm = selectedOptionsWm.map((item) => item.id);
    const selectedOptionNameEd = selectedOptionEd.name;
    const selectedOptionNamePr = selectedOptionPr.name;
    const selectedOptionNameGi = selectedOptionGi.name;
    return {
      selectedOptionsIdsSp,
      selectedOptionsIdsTm,
      selectedOptionsIdsWp,
      selectedOptionsIdsWm,
      selectedOptionNameEd,
      selectedOptionNamePr,
      selectedOptionNameGi,
    };
  };

  const {
    selectedOptionsIdsSp,
    selectedOptionsIdsTm,
    selectedOptionsIdsWp,
    selectedOptionsIdsWm,
    selectedOptionNameEd,
    selectedOptionNamePr,
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
        selectedOptionNamePr,
        selectedOptionNameGi,
        hasPerspective,
        hasPrepaid
      )
    ).data;
    setPsychologists(data.results);
    setCount(data.count);
    setLoading(false);
    setPagination(1);
    setNoMore(false);
    // setHasDataLoaded(true);
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
          selectedOptionNamePr,
          selectedOptionNameGi,
          hasPerspective,
          hasPrepaid
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

  const updatePsychologist = async (psychologistId: any) => {
    const data = (await PsychologistsService.detail(psychologistId)).data;

    const newState: any = psychologists.map((obj: any) => {
      if (obj.id === psychologistId) {
        return { ...obj, liked: data.liked };
      }

      return obj;
    });
    setPsychologists(newState);
  };

  const handlePagination = () => {
    setPagination(pagination + 1);
  };

  const reinitialise = () => {
    setName(undefined);
    setHasPerspective("all");
    setHasPrepaid("all");
    setSelectedOptionsSp([]);
    setSelectedOptionsTm([]);
    setSelectedOptionsWp([]);
    setSelectedOptionsWm([]);
    setSelectedOptionEd({});
    setSelectedOptionPr({});
    setSelectedOptionGi({});
  };

  // useEffect(() => {
  //   const verifyToken = async () => {
  //     try {
  //       const response = (await UsersService.verifyToken()).data;
  //       if (response.valid) {
  //         console.log("everything is ok, doesn't remove the token!");
  //       } else {
  //         console.log("remove the token v1!");
  //         localStorage.removeItem("Token");
  //       }
  //       setHasVerifiedToken(true);
  //     } catch (err) {
  //       console.log("remove the token v2!");
  //       localStorage.removeItem("Token");
  //       setHasVerifiedToken(true);
  //     }
  //   };
  //   verifyToken();
  // }, []);

  useEffect(() => {
    fetchPsychologists();
  }, [
    debouncedName,
    selectedOptionsSp,
    selectedOptionsTm,
    selectedOptionsWp,
    selectedOptionsWm,
    selectedOptionEd,
    selectedOptionPr,
    selectedOptionGi,
    hasPerspective,
    hasPrepaid,
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
          content="Una aplicación web para encontrar a tu mejor psicoterapeuta con formación basada en evidencia."
        />
        <meta name="keywords" content="psievidencia psicologia evidencia" />
        <meta name="twitter:image:src" content="/images/cover.png" />
        <meta property="og:image" content="/images/cover.png" />
        <meta
          name="google-site-verification"
          content="SunVWUveAt2rjkQwOP05PRn3LsPQ8T24-Aji_ACkSik"
        />
      </Head>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '${process.env.NEXT_PUBLIC_GTM_ID}');`}
      </Script>
      <div className="container min-h-screen w-11/12 mx-auto pt-20 pb-40">
        {/* {hasDataLoaded && hasVerifiedToken ? (
          <> */}
        <TheHeader />

        <AllFilters
          className="hidden sm:block"
          handleNameChange={handleNameChange}
          handleHpChange={handleHpChange}
          hasPerspective={hasPerspective}
          handlePdChange={handlePdChange}
          hasPrepaid={hasPrepaid}
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
          selectedOptionPr={selectedOptionPr}
          setSelectedOptionPr={setSelectedOptionPr}
          selectedOptionGi={selectedOptionGi}
          setSelectedOptionGi={setSelectedOptionGi}
          sp={sp}
          setSp={setSp}
          tm={tm}
          setTm={setTm}
          wp={wp}
          setWp={setWp}
          wm={wm}
          setWm={setWm}
          ed={ed}
          setEd={setEd}
          pr={pr}
          setPr={setPr}
          gi={gi}
          setGi={setGi}
        />

        <div className="sm:hidden flex justify-end">
          <TheModalFull
            reinitialise={reinitialise}
            modalCentered={true}
            button={<DropdownBtn />}
            title={"Filtrar"}
            content={
              <AllFilters
                handleNameChange={handleNameChange}
                handleHpChange={handleHpChange}
                hasPerspective={hasPerspective}
                handlePdChange={handlePdChange}
                hasPrepaid={hasPrepaid}
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
                selectedOptionPr={selectedOptionPr}
                setSelectedOptionPr={setSelectedOptionPr}
                selectedOptionGi={selectedOptionGi}
                setSelectedOptionGi={setSelectedOptionGi}
                sp={sp}
                setSp={setSp}
                tm={tm}
                setTm={setTm}
                wp={wp}
                setWp={setWp}
                wm={wm}
                setWm={setWm}
                ed={ed}
                setEd={setEd}
                pr={pr}
                setPr={setPr}
                gi={gi}
                setGi={setGi}
              />
            }
            count={count}
          />
        </div>

        <TheDropdownOptionsIds
          selectedOptions={selectedOptionsSp}
          setSelectedOptions={setSelectedOptionsSp}
          setData={setSp}
        />
        <TheDropdownOptionsIds
          selectedOptions={selectedOptionsTm}
          setSelectedOptions={setSelectedOptionsTm}
          setData={setTm}
        />
        <TheDropdownOptionsIds
          selectedOptions={selectedOptionsWp}
          setSelectedOptions={setSelectedOptionsWp}
          setData={setWp}
        />
        <TheDropdownOptionsIds
          selectedOptions={selectedOptionsWm}
          setSelectedOptions={setSelectedOptionsWm}
          setData={setWm}
        />
        <TheDropdownOptionsName
          selectedOption={selectedOptionEd}
          setSelectedOption={setSelectedOptionEd}
          setData={setEd}
        />
        <TheDropdownOptionsName
          selectedOption={selectedOptionGi}
          setSelectedOption={setSelectedOptionGi}
          setData={setGi}
        />
        <TheDropdownOptionsName
          selectedOption={selectedOptionPr}
          setSelectedOption={setSelectedOptionPr}
          setData={setPr}
        />

        {psychologists != null && psychologists.length > 0 ? (
          <>
            <div className="my-12">
              <p className="font-bold text-xl">{count} psicoterapeutas</p>
            </div>

            <div className="mt-6 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {psychologists.map((psychologist: Psychologist) => {
                return (
                  <TheCard
                    key={psychologist.id}
                    psychologist={psychologist}
                    update={updatePsychologist}
                    showLogin={showLogin}
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
        ) : count === 0 ? (
          <div className="grid place-items-center text-2xl h-56">
            <FormattedMessage id="no.results" />
          </div>
        ) : (
          <div className="mt-6">
            <Skeleton height={30} />
          </div>
        )}
        {/* </>
        ) : (
          <LoadingSpinner />
        )} */}
      </div>
    </>
  );
};

export default React.forwardRef(Home);
