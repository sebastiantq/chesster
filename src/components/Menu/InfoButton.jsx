import React from "react";
import { Link } from "react-router-dom";

// import { useDispatch } from "react-redux";
// import { setNotificacion } from "../../store/notificacion"

const InfoButton = (props) => {
    const { color } = props
    // const dispatch = useDispatch()

    /* const proximamente = () => {
        dispatch(setNotificacion("¡Próximamente!"))
    }; */
    
    return(
        <Link to={"/info"} /* onClick={proximamente} */ className={"menu-button " + color}>Info</Link>
    );
}

export default InfoButton;