import React from "react";

class InicioButton extends React.Component{
    proximamente = () => {
        alert("¡Proximamente!")
    };
    
    render(){
        return(
            <button onClick={this.proximamente} className="menu-button black-button" >Inicio</button>
        );
    }
}

export default InicioButton;