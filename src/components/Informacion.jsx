import React from "react";

import "./Informacion/Informacion.css";

import { useSelector } from "react-redux";
import { selectNotificacion } from "../store/notificacion/selectors";
import Card from "./Informacion/Card";
import Notification from "./Pop/Notification";

function Informacion() {
  const state = useSelector(selectNotificacion); // Estado de la notificacion

  return (
    <div className="informacion">
      <a href="/info/historia">
        <Card
          titulo="Historia"
          numero="01"
          img="./ajedrezNiñoHistoria.jpeg"
        ></Card>
        {/*                 
                <div className='historia'>
                    <img src="./historia.jpeg" alt="Historia"/>
                    <h2>Historia</h2>
                    <div>
                        <ul>
                            <li>Conoce su origen</li>
                            <li>Conoce a los mejores jugadores de la historia</li>
                            <li>Que ha hecho el ajedrez por el mundo</li>
                        </ul>
                    </div>
                </div> */}
      </a>
      <a href="/info/reglas">
        <Card
          titulo="Reglas"
          numero="02"
          img="./ajedrezReglas.jpg"
        ></Card>
        {/* <div className='reglas'>
                    <img src="./reglas.jpeg" alt="Reglas"/>
                    <h2>Reglas</h2>
                    <div>
                        <ul>
                            <li>Conoce sus reglas</li>
                        </ul>
                    </div>
                </div> */}
      </a>
      <a href="/info/trucos">
        <Card
          titulo="Trucos"
          numero="03"
          img="./trucoss.jpg"
        ></Card>
        {/* <div className='trucos'>
                    <img src="./trucos.jpeg" alt="Trucos y consejos"/>
                    <h2>Trucos y consejos</h2>
                    <div>
                        <ul>
                            <li>Aprende a jugar</li>
                            <li>Conoce nuevos trucos</li>
                            <li>Sigue consejos de profesionales</li>
                        </ul>
                    </div>
                </div> */}
      </a>
      {state.notificacion && <Notification text={state.notificacion} />}
    </div>
  );
}

export default Informacion;
