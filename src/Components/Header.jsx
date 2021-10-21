import React from "react";
import { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { CgCloseR } from "react-icons/cg";
import "../Styles/Header.css";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const goToCotiza = () => {
    document.getElementById("cotizado").scrollIntoView({
      behavior: "smooth",
    });
  };

  const goToFilter = () => {
    document.getElementById("filtrado").scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="header">
      <h1 className="logo">CS</h1>
      <div className="botones">
        <button className="cotiza" onClick={goToCotiza}>
          Cotiza
        </button>
        <button className="catalogo" onClick={goToFilter}>
          Ver catálogo
        </button>
        {showMenu ? (
          <button className="menu" onClick={() => setShowMenu(false)}>
            <CgCloseR />
          </button>
        ) : (
          <button className="menu" onClick={() => setShowMenu(true)}>
            <TiThMenu />
          </button>
        )}
      </div>
      {showMenu && (
        <div className="menuDesplegable">
          <button className="cotiza" onClick={goToCotiza}>
            Cotiza
          </button>
          <button className="catalogo" onClick={goToFilter}>
            Ver catálogo
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
