import React from "react";
import { Link } from "react-router-dom";

class InicioButton extends React.Component{
    render(){
        return(
            <Link to={"/"} className="menu-button black-button" >Inicio</Link>
        );
    }
}

export default InicioButton;