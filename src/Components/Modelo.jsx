import React from "react";
import "../Styles/modelo.css";
import Modal from "../Components/Modal";
import { useState } from "react";

const Modelo = (props) => {
  const {
    mod: { nombre, marca, procedencia, price, image },
  } = props;
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="modeloContainer">
      {showModal && (
        <Modal
          setShowModal={setShowModal}
          nombre={nombre}
          marca={marca}
          procedencia={procedencia}
          price={price}
          image={image}
        />
      )}
      <img src={image} alt={`fotol ${marca} ${nombre}`} className="imagen" />
      <div className="informacion">
        <h5 className="carro">{`${marca} ${nombre}`}</h5>
        <h5 className="precio">{`$${price}.00`}</h5>
      </div>
      <button className="botonCotizar" onClick={() => setShowModal(true)}>
        Cotizar seguro
      </button>
    </div>
  );
};

export default Modelo;
