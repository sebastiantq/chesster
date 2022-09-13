import React from "react";

class JugarButton extends React.Component{
    proximamente = () => {
        alert("¡Proximamente!")
    };
    
    render(){
        return(
            <button onClick={this.proximamente} className="menu-button black-button">Jugar</button>
        );
    }
}

export default JugarButton;