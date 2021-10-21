import React from "react";
import { useState } from "react";
import {
  calcularMarca,
  obtenerDiferenciaYear,
  obtenerPlan,
} from "../helpers/helpers";
import "../Styles/modal.css";
import { CgCloseO } from "react-icons/cg";

const Modal = ({ setShowModal, nombre, marca, procedencia, price, image }) => {
  const [error, setError] = useState(false);
  const [total, setTotal] = useState(0);
  const [resumen, setResumen] = useState({
    year: new Date().getFullYear(),
    plan: "",
  });

  const onChange = (e) => {
    if (e.target.name === "year") {
      setResumen({
        ...resumen,
        [e.target.name]: parseInt(e.target.value),
      });
    } else {
      setResumen({
        ...resumen,
        [e.target.name]: e.target.value,
      });
    }
  };

  const cotizar = (e) => {
    e.preventDefault();

    if (resumen.plan.trim() === "") {
      setError(true);
      return;
    } else {
      //direfencoa de año
      const diferencia = obtenerDiferenciaYear(resumen.year);

      //Por cada año restar el 3%
      price -= (diferencia * 3 * price) / 100;

      //Segun la procedencia
      price = calcularMarca(procedencia) * price;

      //Segun Plan
      const incremento = obtenerPlan(resumen.plan);
      setTotal(parseFloat(incremento * price).toFixed(2));
    }
  };

  return (
    <div className="modalContainer">
      <div className="contenedor">
        <div className="cerrarBotonContainer">
          <CgCloseO
            onClick={() => setShowModal(false)}
            className="cerrarBoton"
          />
        </div>
        <div className="fotoYTotal">
          <img src={image} alt="Imagen de Carro" className="imagen" />
          {total > 0 && <h3 className="total">{`Total: $${total}`}</h3>}
        </div>
        <div className="datos">
          <div className="info">
            <h1>{`${marca} ${nombre}`}</h1>
            <h1>{`$${price}.00`}</h1>
          </div>
          <form className="formulario" onSubmit={cotizar}>
            <h4 className="cotizaTitulo">Cotiza tu plan de seguro</h4>
            <h4 className="titulo">1. Año del carro</h4>
            <select name="year" id="" value="2021" onChange={onChange}>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
              <option value="2018">2018</option>
            </select>
            <h4 className="titulo">2. Tipo de plan</h4>
            <label htmlFor="basico">Basico</label>
            <input
              type="radio"
              name="plan"
              id="basico"
              value="basico"
              onChange={onChange}
            />
            <label htmlFor="completo">Completo</label>
            <input
              type="radio"
              name="plan"
              id="completo"
              value="completo"
              onChange={onChange}
            />
            <input type="submit" value="Cotizar" className="boton" />
            {error && <p className="mensajeError">Escoja un plan</p>}
          </form>
          <div className="cotizado">
            <h4>Resumen de Cotización</h4>
            <div className="resumen">
              <p>Marca: {marca}</p>
              <p>Modelo: {nombre}</p>
              <p>Año: {resumen.year}</p>
              <p>Plan: {resumen.plan}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
