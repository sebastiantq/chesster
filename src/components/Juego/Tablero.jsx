import React from "react";

class Tablero extends React.Component{
    render(){
        return(
            <div className="tablero">
                <div className="tablero-superior">
                    <h1>Movimiento n</h1>
                    <h1>00:00</h1>
                </div>
                <div className="tablero-inferior">
                    <img alt="Tablero de juego" src="./tablero.jpeg"></img>
                </div>
            </div>
        );
    }
}

export default Tablero;