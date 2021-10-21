import React from "react";
import "../Styles/carros.css";
import Modelo from "./Modelo";

const Carros = ({ showCars }) => {
  return (
    <div className="allModelsContainer" id="cotizado">
      {showCars.map((mod) => (
        <Modelo mod={mod} key={mod.nombre} />
      ))}
    </div>
  );
};

export default Carros;
