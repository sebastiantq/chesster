import React from "react";
import Footer from "../../Footer";
import "./Reglas.css";
import Elemento from "../elemento/Elemento2";

function Reglas() {
  return (
    <div>
      <div className="reglasPage">
        <div className="reglas-texto">
          <Elemento
            titulo="1. El jugador con las piezas blancas mueve primero"
            texto="Decidir si jugarás con las piezas negras o blancas del ajedrez, no es una cuestión de gusto, sino que hay un componente estratégico en cada decisión. En primer lugar, deberás tener en cuenta que el jugar con las piezas blancas siempre mueve primero.

Tu primer movimiento es crucial y, como consejo, debe responder a una estrategia; para ello, debes conocer muchas aperturas modernas del ajedrez, las cuales te permitirán sacar la delantera."
          ></Elemento>
          <Elemento
            titulo="2. Cada jugador mueve 1 de sus piezas en su turno"
            texto="En este aspecto, las reglas de ajedrez son claras, no puedes mover más de una pieza en tu turno. La única excepción a esta regla es cuando realizas un enroque, que debe realizarse moviendo una de tus torres y tu rey. También se debe aclarar que, ninguna pieza puede moverse a un espacio ocupado, a menos que sea para capturar."
          ></Elemento>
          <Elemento
            titulo="3. Gana el jugador que logre hacer Jaque Mate al oponente"
            texto="El objetivo del juego es muy sencillo: capturar al rey enemigo y lograr un jaque mate. Durante la partida, verás varias situaciones en las que el rey estará amenazado, sin embargo, puede librarse de la captura; a eso se le llama jaque."
          ></Elemento>
          <h2>Reglas avanzadas</h2>
          <Elemento
            titulo="1.  El uso del reloj"
            texto="Al ser un juego estratégico, muchos jugadores se toman su tiempo para pensar, analizar la estrategia del oponente y considerar diferentes opciones de movimiento según las reglas del ajedrez. Por ello, el reloj se torna indispensable en el caso de las competencias. se establecen que cada jugador dispone de 2 minutos para realizar su movimiento."
          ></Elemento>
          <Elemento
            titulo="2. Partida tablas"
            texto="nadie gana en partida tablas. Las reglas del ajedrez establecen que, una partida tablas, es una derrota mutua y ambos jugadores deben estar de acuerdo para declarar tablas."
          ></Elemento>
        </div>
        <div className="reglas-header">
          <div className="titulo">
            <h1>Reglas</h1>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Reglas;
