import { Inter } from "next/font/google";
import { useState, useEffect } from "react";
import CountriesList from "../components/tableList";

const axios = require("axios");

const handleFetchAPI = async () => {
  try {
    const { data } = await axios.get("http://localhost:3000/api/countries");
    return { status: data.status, data: data };
  } catch (error) {
    console.log("error : ", error);
  }
};

const useCountries = () => {
  const [countriesData, setCountriesData] = useState([]);
  const [count, setCount] = useState(0);

  const handleLoadCountriesData = async () => {
    const { data, status } = await handleFetchAPI();
    if (status === 200) {
      setCountriesData(data.data);
    }
  };

  useEffect(() => {
    console.log("Hook Load");
    handleLoadCountriesData();
  }, []);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <div>
        <h1>Hello Countries</h1>
        <CountriesList />
      </div>
    </main>
  );
};

export default useCountries;
