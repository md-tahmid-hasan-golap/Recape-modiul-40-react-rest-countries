import { Suspense } from "react";
import "./App.css";
import Countries from "./Components/Countries/Countries";

const countriesDada = fetch("https://restcountries.com/v3.1/all").then((res) =>
  res.json()
);

function App() {
  return (
    <>
      <Suspense fallback={<h2>Golap Vai Goaing ...</h2>}>
        <Countries
          key={countriesDada.id}
          countriesDada={countriesDada}
        ></Countries>
      </Suspense>
    </>
  );
}

export default App;
