import React from "react";

class JugarButton extends React.Component{
    proximamente = () => {
        alert("¡Proximamente!")
    };
    
    render(){
        return(
            <button onClick={this.proximamente} className="menu-button black-button"><link to="/Juego"></link>Jugar</button>
        );
    }
}

export default JugarButton;