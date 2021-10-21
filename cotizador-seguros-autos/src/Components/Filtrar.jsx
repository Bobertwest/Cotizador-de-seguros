import React, { useEffect, useState } from "react";
import { autos } from "../helpers/helpers";
import "../Styles/fitrar.css";

const Filtrar = ({
  marcas,
  setMarcas,
  modelos,
  setModelos,
  allCars,
  setAllCars,
  setShowCars,
}) => {
  const [comodinFiltro, setComodinFiltro] = useState([]);

  useEffect(() => {
    if (comodinFiltro.length > 0) {
      return;
    } else {
      setComodinFiltro(marcas);
    }
    //eslint-disable-next-line
  }, [marcas]);

  const onChange = (e) => {
    if (e.target.name === "Procedencia") {
      setShowCars(
        allCars.filter((proce) => proce.procedencia === e.target.value)
      );
      setMarcas(
        comodinFiltro.filter((proce) => proce.procedencia === e.target.value)
      );
      setModelos(
        allCars.filter((proce) => proce.procedencia === e.target.value)
      );
    } else if (e.target.name === "Marca") {
      setShowCars(allCars.filter((marc) => marc.marca === e.target.value));
      setModelos(allCars.filter((marc) => marc.marca === e.target.value));
    } else if (e.target.name === "Modelo") {
      setShowCars(allCars.filter((model) => model.nombre === e.target.value));
    }
  };

  const quitarFiltro = () => {
    setShowCars(autos);
    setMarcas(comodinFiltro);
    setModelos(autos);
    setAllCars(autos);
  };

  return (
    <div className="filtrarContainer" id="filtrado">
      <h2 className="filtrarTitulo">Filtrar</h2>
      <form className="seleccion">
        <select name="Procedencia" onChange={onChange}>
          <option hidden> --Procedencia-- </option>
          <option value="America">América</option>
          <option value="Asia">Asia</option>
          <option value="Europa">Europa</option>
        </select>
        <select name="Marca" onChange={onChange}>
          <option hidden> --Marca-- </option>
          {marcas.map((mar) => (
            <option value={mar.marca} key={mar.nombre}>
              {mar.marca}
            </option>
          ))}
        </select>
        <select name="Modelo" onChange={onChange}>
          <option hidden> --Modelo-- </option>
          {modelos.map((mod) => (
            <option value={mod.nombre} key={mod.nombre}>
              {mod.nombre}
            </option>
          ))}
        </select>
      </form>
      <button onClick={quitarFiltro} className="quitarFiltro">
        Quitar filtro
      </button>
    </div>
  );
};

export default Filtrar;
