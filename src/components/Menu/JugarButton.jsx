import React from "react";
import { Link } from "react-router-dom";

class JugarButton extends React.Component{
    render(){
        return(
            <Link to={"/jugar"} className="menu-button black-button">Jugar</Link>
        );
    }
}

export default JugarButton;