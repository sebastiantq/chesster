import React from "react";
import { Link } from "react-router-dom";

function InicioButton(props) {
    const { color } = props

  return (
    <Link to={"/"} className={"menu-button " + color} >Inicio</Link>
  )
}

export default InicioButton;