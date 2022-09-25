import React from "react";
import { Link } from "react-router-dom";

class InfoButton extends React.Component{
    proximamente = () => {
        alert("¡Proximamente!")
    };
    
    render(){
        return(
            <Link onClick={this.proximamente} className="menu-button white-button">Info</Link>
        );
    }
}

export default InfoButton;