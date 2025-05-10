import React, { use } from "react";
import Country from "../Country/Country";
import "./Countries.css";
const Countries = ({ countriesDada }) => {
  const useCountriesDada = use(countriesDada);
  //   console.log(useCountriesDada);
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>
        Traveling Countries : {useCountriesDada.length}
      </h2>
      <div className="countries">
        {useCountriesDada.map((country) => (
          <Country key={country.cca3} country={country}>
            {" "}
          </Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
