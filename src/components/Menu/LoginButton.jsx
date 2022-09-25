import React from "react";
import { Link } from "react-router-dom";

class LoginButton extends React.Component{
    proximamente = () => {
        alert("¡Proximamente!")
    };
    
    render(){
        return(
            <Link onClick={this.proximamente} className="menu-button white-button">Login</Link>
        );
    }
}

export default LoginButton;