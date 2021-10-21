import React, { useEffect } from "react";
import { useState } from "react";
import "../src/Styles/App.css";
import Carros from "./Components/Carros";
import Filtrar from "./Components/Filtrar";
import Portada from "./Components/Portada";
import { autos } from "./helpers/helpers";

function App() {
  const comodin = [];
  const [modelos, setModelos] = useState(autos);
  const [marcas, setMarcas] = useState([]);
  const [allCars, setAllCars] = useState(autos);
  const [showCars, setShowCars] = useState(autos);

  const goToCotiza = () => {
    document.getElementById("id").scrollIntoView({
      behavior: "smooth",
    });
  };

  const goToFilter = () => {
    document.getElementById("id").scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    allCars.forEach((el) => {
      if (comodin.length > 0) {
        if (comodin.some((il) => il.marca === el.marca)) {
        } else {
          comodin.push(el);
        }
      } else {
        comodin.push(el);
      }
    });
    setMarcas(comodin);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <Portada goToCotiza={goToCotiza} goToFilter={goToFilter} />
      <Filtrar
        marcas={marcas}
        setMarcas={setMarcas}
        modelos={modelos}
        setModelos={setModelos}
        allCars={allCars}
        setAllCars={setAllCars}
        showCars={showCars}
        setShowCars={setShowCars}
        comodin={comodin}
      />
      <Carros showCars={showCars} />
    </div>
  );
}

export default App;
