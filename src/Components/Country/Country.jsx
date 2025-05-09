import React from "react";

const Country = ({ country }) => {
  console.log(country.flags);
  return (
    <div>
      <h3>Country Name : {country.name.common} </h3>
      <img src={country.flags.png} alt="" />
      <p>Independent : {country.independent ? "Free" : "Not Free"}</p>
      <p>population " {country.population}</p>
      {/* <p>
        <strong>official</strong> : {country.name.official}
      </p> */}
    </div>
  );
};

export default Country;
