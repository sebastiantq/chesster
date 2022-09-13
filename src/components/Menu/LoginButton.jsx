import React from "react";

class LoginButton extends React.Component{
    proximamente = () => {
        alert("¡Proximamente!")
    };
    
    render(){
        return(
            <button onClick={this.proximamente} className="menu-button white-button">Login</button>
        );
    }
}

export default LoginButton;