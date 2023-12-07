import { Inter } from "next/font/google";
import { useState, useEffect, useMemo } from "react";
import CountryListComponent from "../components/countryListComponent";

const axios = require("axios");

const useCountries = () => {
  const [countriesData, setCountriesData] = useState([]);
  const [load, setLoad] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [searchCountry, setSearchCountry] = useState(0);
  const [countryLimit, setCountryLimit] = useState(25);
  const [listPage, setListPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [listSort, setListSort] = useState("");

  const handleFetchCountryAPI = async () => {
    try {
      const { data } = await axios.get(
        `/api/countries?page=${listPage}&limit=${countryLimit}`
      );
      return { status: data.status, data: data };
    } catch (error) {
      console.log("error : ", error);
    }
  };

  const handleSearchCountryAPI = async () => {
    const { data, status } = await axios.get(
      `/api/countries/search?page=${listPage}&limit=${countryLimit}&countryName=${searchCountry}`
    );
    return { status: status, data: data };
  };

  const handleResetDefaultState = () => {
    setListPage(1);
  };

  const handleLoadCountriesData = async () => {
    const { data, status } = await handleFetchCountryAPI();
    if (status === 200) {
      setCountriesData(data.data);
      setTotalPages(data.totalPages);
    }
  };

  const handleSearchCountryByName = async () => {
    const { data, status } = await handleSearchCountryAPI();
    if (status === 200) {
      setCountriesData(data.data);
      setTotalPages(data.totalPages);
    } else {
      setCountriesData([]);
    }
  };

  /**
   * Handle between Search or load all countries
   *
   */
  useEffect(() => {
    if (searchCountry && isSearch && listPage > 0) {
      handleSearchCountryByName();
    }

    if (!isSearch && listPage > 0) {
      handleLoadCountriesData();
    }
  }, [isSearch, listPage, searchCountry]);

  /**
   * Handling when Search event tracking by setIsSearch state.
   */
  useEffect(() => {
    if (searchCountry) {
      setIsSearch(true);
    } else {
      setIsSearch(false);
      handleResetDefaultState();
    }
  }, [searchCountry]);

  const mockdata = () => {
    if (listSort === "ACS") {
      const mocArry = Object.assign([], countriesData);

      const sortFN = (a, b) => {
        return a.name.official.localeCompare(b.name.official);
      };
      const result = mocArry.sort(sortFN);
      setCountriesData(result);
    }

    if (listSort === "DES") {
      const mocArry = Object.assign([], countriesData);
      const sortFN = (a, b) => {
        return b.name.official.localeCompare(a.name.official);
      };
      const result = mocArry.sort(sortFN);
      setCountriesData(result);
    }
  };

  useEffect(() => {
    mockdata();
  }, [listSort]);

  const handleFilterFN = {
    // everytime search value changed, should reset the state
    nameCountryFN: (nameText) => {
      setSearchCountry(nameText);
      handleResetDefaultState();
      setIsSearch(true);
    },
  };

  const handleSortFN = (type) => {
    setListSort(type);
  };

  const handlePaginationFN = {
    next: () => {
      setListPage((preState) => {
        if (preState < totalPages) {
          return preState + 1;
        }
        return preState;
      });
    },
    previous: () => {
      setListPage((preState) => {
        if (preState > 1) {
          return preState - 1;
        }
        return preState;
      });
    },
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <div>
        <p className="flex justify-center text-6xl">Hello Countries</p>
        <CountryListComponent
          data={countriesData}
          handleFilterFN={handleFilterFN}
          handleSortFN={handleSortFN}
          handlePaginationFN={handlePaginationFN}
        />
      </div>
    </main>
  );
};

export default useCountries;
