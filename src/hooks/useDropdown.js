import { useState, useEffect } from "react";
import PsychologistsService from "../services/PsychologistsService";

const useDropdown = (type) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState(1);

  const fetchData = async () => {
    const data = (await PsychologistsService.lists(1, type)).data;
    setData(data.results);
  };

  const fetchMoreData = async (pagination) => {
    const data = (await PsychologistsService.lists(pagination, type)).data;
    setData((item) => item.concat(data.results));
  };

  const addData = (value) => {
    setData((oldArray) => [value, ...oldArray]);
  };

  const updateData = (option) => {
    setData(data.filter((data) => data.id !== option.id));
  };

  const handlePagination = () => {
    setPagination(pagination + 1);
  };

  const updateSelectedOptions = (id) => {
    setSelectedOptions(
      selectedOptions.filter((selectedOptions) => selectedOptions.id !== id)
    );
  };

  const addSelectedOptions = (value) => {
    setSelectedOptions((oldArray) => [...oldArray, value]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (pagination > 1) {
      fetchMoreData(pagination);
    }
  }, [pagination]);

  return;
};

export default useDropdown;
