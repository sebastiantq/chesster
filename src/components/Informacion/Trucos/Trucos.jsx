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
          <Truco
            titulo="#1 Apertura Italiana"
            img ="/GIF-1.gif"
            texto="Las partidas con la apertura italiana comienzan con 1.e4 e5 2.Cf3 Cc6 3.Ac4. El objetivo es controlar el centro de manera rápida con el peón y el caballo y después colocar el alfil en una de las casillas más peligrosas. También estás preparando enrocarte de manera segura."
          ></Truco>
          <Truco
            titulo="#2 Defensa Siciliana"
            img ="/GIF-2.gif"
            texto="La Defensa Siciliana es la opción más popular con negras, escogida por los jugadores agresivos. Normalmente, las blancas juegan 2.Cf3 y 3.d4 lo que ganará espacio central, pero permitirá a las negras beneficiarse del intercambio de un peón de alfil por un peón central. "
          ></Truco>
          <Truco
            titulo="#3 Defensa Francesa"
            img ="/GIF-3.gif"
            texto="La defensa francesa es una de las primeras aperturas estratégicas que todo ajedrecista debería aprender. Después de e5 (ahora o después), ambos jugadores tendrán una cadena de peones. Uno de los riesgos de la defensa francesa es el alfil de c8, el cual tendrá problemas para ser desarrollado."
          ></Truco>
          <Truco
            titulo="#4 Ruy López"
            img ="/GIF-4.gif"
            texto="La Ruy López es una de las aperturas más antiguas y más clásicas de todas. Su nombre viene después de que un obispo español escribiera uno de los primeros libros de ajedrez. La Ruy López ataca el caballo que defiende el peón de e5. Las blancas esperan utilizar a este ataque para crear más presión en el centro rival. "
          ></Truco>
          <Truco
            titulo="#5 La Defensa Eslava"
            img ="/GIF-5.gif"
            texto="La defensa eslava es una apertura sólida, la cual defiende el peón d5 de manera segura. Las negras pueden desarrollar sus piezas de manera natural, pero normalmente tendrán menos espacio."
          ></Truco>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Trucos;
