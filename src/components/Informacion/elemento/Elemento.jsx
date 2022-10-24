import React from "react";
import "./Elemento.css";

function Elemento(props) {
  return (
    <div className="elemento">
      <h3>{props.titulo}</h3>
      <p>
        {props.texto}
      </p>
      <img src={props.img} alt="imagen"  border="0"></img>
      <hr></hr>
    </div>
  );
}

export default Elemento;
