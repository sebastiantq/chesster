import React from "react";
import { Link } from "react-router-dom";

function JugarButton(props) {
    const { color } = props

    return (
    <Link to={"/jugar"} className={"menu-button " + color}>Jugar</Link>
  )
}

export default JugarButton;