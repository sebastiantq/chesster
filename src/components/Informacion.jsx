import React from "react";

import "./Informacion/Informacion.css";

import { useSelector } from "react-redux";
import { selectNotificacion } from "../store/notificacion/selectors";
import Card from "./Informacion/Card";
import Notification from "./Pop/Notification";
import { Link } from "react-router-dom";

function Informacion() {
  const state = useSelector(selectNotificacion); // Estado de la notificacion

  return (
    <div className="informacion">
      <Link to="/info/historia">
        <Card titulo="Historia"
              numero="01"
              img="./ajedrezNiñoHistoria.jpeg">
        </Card>
      </Link>
      <Link to="/info/reglas">
        <Card titulo="Reglas"
              numero="02"
              img="./ajedrezReglas.jpg">
        </Card>
      </Link>
      <Link to="/info/jugadas">
        <Card titulo="Jugadas"
              numero="03"
              img="./trucoss.jpg">
        </Card>
      </Link>
      { state.notificacion && <Notification text={state.notificacion}/> }
    </div>
  );
}

export default Informacion;
