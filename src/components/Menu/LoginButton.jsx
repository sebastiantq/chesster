import React /*, { useState } */ from "react";
import { Link } from "react-router-dom";

// import { useDispatch } from "react-redux";
// import { setNotificacion } from "../../store/notificacion"

// import Login from "../Pop/Login";
// import Register from "../Pop/Register"

const LoginButton = () => {
    // const [popup, setPopup] = useState("") 

    // const dispatch = useDispatch()

    /* const proximamente = () => {
        // dispatch(setNotificacion("¡Próximamente!"))
        // setPopup("login")
        navigate("/login")
    }; */
    
    return(
        <>
            <Link to="/login" className="menu-button white-button">Login</Link>
        
            {/* { popup === "login" || <Login setPopup={ setPopup }/> } */}
            {/* { popup === "register" && <Register setPopup={ setPopup }/> } */}
        </>
    );
}

export default LoginButton;