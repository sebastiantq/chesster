import React from "react";

class InfoButton extends React.Component{
    proximamente = () => {
        alert("¡Proximamente!")
    };
    
    render(){
        return(
            <button onClick={this.proximamente} className="menu-button white-button">Info</button>
        );
    }
}

export default InfoButton;