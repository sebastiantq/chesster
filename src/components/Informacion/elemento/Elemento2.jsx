import React from "react";
import "./Elemento.css";

function Elemento2(props) {
  return (
    <div className="elemento">
      <h3>{props.titulo}</h3>
      <p>
        {props.texto}
      </p>
      
      <hr></hr>
    </div>
  );
}

export default Elemento2;
