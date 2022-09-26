import React from "react";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { setNotificacion } from "../../store/notificacion"

const LoginButton = () => {
    const dispatch = useDispatch()

    const proximamente = () => {
        dispatch(setNotificacion("¡Próximamente!"))
    };
    
    return(
        <Link onClick={proximamente} className="menu-button white-button">Login</Link>
    );
}

export default LoginButton;