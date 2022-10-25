import React from "react";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { setNotificacion } from "../../store/notificacion"
import { setLogueado } from "../../store/sesion"

const SesionButton = (props) => {
    const { color } = props

    const dispatch = useDispatch()

    const logout = () => {
        dispatch(setLogueado(false))
        dispatch(setNotificacion("Se ha cerrado sesión"))
    }
    
    return(
        <Link onClick={logout} to={"/"} className={"menu-button " + color}>Cerrar sesión</Link>
    );
}

export default SesionButton;