import React, { useState } from "react";
import "./Country.css";
const Country = ({ country }) => {
  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    // setVisited(true)
    if (visited === true) {
      setVisited(false);
    } else {
      setVisited(true);
    }
  };
  //   console.log(country);
  return (
    <div className={`country ${visited && "country-visited"}`}>
      <h3>Country Name : {country.name.common} </h3>
      <img src={country.flags.png} alt="" />
      <p>Independent : {country.independent ? "Free" : "Not Free"}</p>
      <p>population " {country.population}</p>
      <button onClick={handleVisited}>
        {visited ? "visited" : "Not Visited"}
      </button>
      {/* <p>
        <strong>official</strong> : {country.name.official}
      </p> */}
    </div>
  );
};

export default Country;
