import React from "react";

class Inicio extends React.Component{
    proximamente = () => {
        alert("¡Proximamente!")
    };

    render(){
        return(
            <div className="inicio">
                <div className="landAction">
                    <img src="./logoInicio.jpeg" alt="ChessTer"/>
                    <h2>ChessTer</h2>
                    <button onClick={this.proximamente}>Comienza ahora</button>
                </div>
                <div className="landText">
                    <p>93% de nuestros jugadores han mejorado sus habilidades despues de 1 mes de juego</p>
                </div>
            </div>
        );
    }
}

export default Inicio;