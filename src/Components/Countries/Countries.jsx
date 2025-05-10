import React, { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";
const Countries = ({ countriesDada }) => {
  const [vigitedcountries, setVigitedcountries] = useState([]);
  const useCountriesDada = use(countriesDada);
  const vigitCountries = (country) => {
    console.log("vigited", country);
    const newVisitedCountry = [...vigitedcountries, country];
    setVigitedcountries(newVisitedCountry);
  };
  //   console.log(useCountriesDada);
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>
        Traveling Countries : {useCountriesDada.length}
      </h2>

      <h3 style={{ textAlign: "center" }}>
        Traveled so fer : {vigitedcountries.length}{" "}
      </h3>
      <ol>
        {vigitedcountries.map((country) => (
          <li>{country.name.common}</li>
        ))}
      </ol>
      <div className="countries">
        {useCountriesDada.map((country) => (
          <Country
            key={country.cca3}
            vigitCountries={vigitCountries}
            country={country}
          >
            {" "}
          </Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
