import React, { useEffect, useState, useRef, useCallback } from "react";
import { TheSelect } from "@/components/edit/TheSelect";
import PsychologistsService from "@/services/PsychologistsService";

type Option = {
  id: number;
  name: string;
  slug?: string;
};

const ProfileSelect = ({
  setForm,
  selectedOption,
  dataToChange,
  label,
  options,
}: {
  setForm: any;
  selectedOption: string | Option[];
  dataToChange: string;
  label: string;
  options?: Option[];
}) => {
  const [fetchedOptions, setFetchedOptions] = useState([]);
  const [value, setValue] = useState(
    typeof selectedOption === "string" ? [] : selectedOption
  );
  const [pagination, setPagination] = useState(1);
  const [loading, setLoading] = useState(false);

  const observer = useRef<any>();

  const lastElementRef = useCallback(
    (node: any) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPagination((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading]
  );

  const handleSelect = (e: any) => {
    setValue(e);
    setForm((currentFormData: any) => {
      const nextFormData = {
        ...currentFormData,
        [dataToChange]: e.hasOwnProperty("slug") ? e.slug : e.name,
      };
      return nextFormData;
    });
  };

  const fetchOptions = async (type: string, name: string | undefined) => {
    setLoading(true);
    const data = (await PsychologistsService.lists(1, type, name)).data;
    setFetchedOptions(data.results);
    setPagination(1);
    setLoading(false);
  };

  const fetchMoreOptions = async (
    pagination: number,
    type: string,
    name: string | undefined
  ) => {
    setLoading(true);
    const data = (await PsychologistsService.lists(pagination, type, name))
      .data;
    setFetchedOptions((item) => item.concat(data.results));
    setLoading(false);
  };

  const fetchSelectedOption = async (
    type: string,
    name: string | undefined
  ) => {
    const data = (await PsychologistsService.lists(1, type, name)).data;
    setValue(data.results);
  };

  useEffect(() => {
    if (typeof selectedOption === "string" && !options) {
      fetchSelectedOption("provinces", selectedOption);
    }
  }, [selectedOption]);

  useEffect(() => {
    if (!options) {
      fetchOptions("provinces", undefined);
    }
  }, []);

  useEffect(() => {
    if (pagination > 1 && !options) {
      fetchMoreOptions(pagination, "provinces", undefined);
    }
  }, [pagination]);

  return (
    <div className="my-4">
      <label className="block text-gray-700 text-1xl mb-2">{label}</label>
      <TheSelect
        options={options ? options : fetchedOptions}
        value={Array.isArray(value) ? value[0] : value}
        onChange={(e) => handleSelect(e)}
        lastElementRef={lastElementRef}
      />
    </div>
  );
};

export default ProfileSelect;
