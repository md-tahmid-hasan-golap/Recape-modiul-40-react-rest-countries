import React, { use } from "react";
import Country from "../Country/Country";

const Countries = ({ countriesDada }) => {
  const useCountriesDada = use(countriesDada);
  //   console.log(useCountriesDada);
  return (
    <div
      style={{
        color: "blue",
      }}
    >
      <h2>Traveling Countries : {useCountriesDada.length}</h2>
      {useCountriesDada.map((country) => (
        <Country key={country.cca3} country={country}>
          {" "}
        </Country>
      ))}
    </div>
  );
};

export default Countries;
