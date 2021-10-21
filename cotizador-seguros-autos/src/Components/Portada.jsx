import React from "react";
import "../Styles/Portada.css";
import portada from "../Images/Portada.jpg";
import Header from "./Header";
import { RiArrowDropDownLine } from "react-icons/ri";

const Portada = () => {
  const goToCars = () => {
    document.getElementById("filtrado").scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <div className="portada">
      <img
        src={portada}
        alt="Portada de Aseguradora de autos"
        className="imagenPortada"
      />
      <div className="texto">
        <h1>asegura tu auto de ensueños.</h1>
        <p>
          Te ofrecemos planes de seguros para una amplia variedad de auttos,
          encuentre y cotiza el tuyo...
        </p>
      </div>
      <button className="flechaContainer" onClick={goToCars}>
        <RiArrowDropDownLine className="flecha" />
      </button>
      <Header />
    </div>
  );
};

export default Portada;
