import React from "react";
import Footer from "../../Footer";
import "./Trucos.css";
import Truco from "../elemento/Elemento";

function Trucos() {
  return (
    <div>
      <div className="trucosPage">
        <div className="trucos-header">
          <div className="titulo">
            <h1>Trucos</h1>
          </div>
        </div>
        <div className="trucos-texto">
          <Truco titulo="Titulo1" texto="ttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt"></Truco>
          <Truco titulo="Titulo2" texto="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"></Truco>
          <Truco titulo="Titulo3" texto="sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss"></Truco>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Trucos;
