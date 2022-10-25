import React from "react";

function Tablero(props) {
    function msToTime(ms) {
        let seconds = (ms / 1000).toFixed(1);
        let minutes = (ms / (1000 * 60)).toFixed(1);
        if (seconds < 60) return seconds + " Sec";
        else if (minutes < 60) return minutes + " Min";
    }

  return (
    <div className="tablero">
        <div className="tablero-superior">
            <h1>Movimiento {props.movimientos}</h1>
            <h1>{msToTime(props.tiempo)}</h1>
        </div>
        <div className="tablero-inferior">
            <img alt="Tablero de juego" src="./tablero.png"></img>
        </div>
    </div>
  )
}

export default Tablero;