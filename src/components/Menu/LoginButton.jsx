import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

// import { useDispatch } from "react-redux";
// import { setNotificacion } from "../../store/notificacion"

import Login from "../Pop/Login";
import Register from "../Pop/Register"

const LoginButton = () => {
    const [popup, setPopup] = useState("") 

    // const dispatch = useDispatch()

    /* const proximamente = () => {
        // dispatch(setNotificacion("¡Próximamente!"))
        // setPopup("login")
        navigate("/login")
    }; */

    const login = () => {
        setPopup("login")
    }

    function disableScroll() {
        // Get the current page scroll position
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop
        let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
      
        // if any scroll is attempted, set this to the previous value
        window.onscroll = function() {
            window.scrollTo(scrollLeft, scrollTop);
        };
    }
      
    function enableScroll() {
        window.onscroll = function() {};
    }

    useEffect(() => {
        (popup === "") ? enableScroll() : disableScroll()
    }, [popup])
    
    return(
        <>
            <Link onClick={login} className="menu-button white-button">Login</Link>
        
            { popup === "login" && <Login setPopup={ setPopup }/> }
            { popup === "register" && <Register setPopup={ setPopup }/> }
        </>
    );
}

export default LoginButton;