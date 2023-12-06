import { Inter } from "next/font/google";
import { useState, useEffect } from "react";
import CountriesList from "../components/tableList";

const axios = require("axios");

const useCountries = () => {
  const [countriesData, setCountriesData] = useState([]);
  const [load, setLoad] = useState(false);
  const [searchCountry, setSearchCountry] = useState(0);

  const handleFetchAPI = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/api/countries");
      return { status: data.status, data: data };
    } catch (error) {
      console.log("error : ", error);
    }
  };

  const handleSearchCountryAPI = async () => {
    const { data, status } = await axios.get(
      `http://localhost:3000/api/countries/search?countryName=${searchCountry}`
    );
    return { status: status, data: data.data };
  };

  const handleLoadCountriesData = async () => {
    const { data, status } = await handleFetchAPI();
    if (status === 200) {
      setCountriesData(data.data);
    }
  };

  const handleSearchCountryByName = async () => {
    const { data, status } = await handleSearchCountryAPI();
    if (status === 200) {
      setCountriesData(data);
    } else {
      setCountriesData([]);
    }
  };

  useEffect(() => {
    console.log("Hook Load");
    if (load) handleLoadCountriesData();
    setLoad(false);
  }, [load]);

  useEffect(() => {
    console.log("Hook Search ", searchCountry);
    if (!searchCountry) {
      setLoad(true);
    } else {
      handleSearchCountryByName();
    }
  }, [searchCountry]);

  const handleFilterFN = {
    nameCountryFN: (nameText) => {
      setSearchCountry(nameText);
    },
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <div>
        <h1>Hello Countries</h1>
        <CountriesList data={countriesData} handleFilterFN={handleFilterFN} />
      </div>
    </main>
  );
};

export default useCountries;
