import React, {useState} from "react";
import { Link } from "react-router-dom";

import Sure from "../Pop/Sure";

const SesionButton = (props) => {
    const { color } = props
    
    const [popup, setPopup] = useState("") 
    
    const middleware = () => {
        setPopup("sure")
    }

    return(
        <>
        <Link onClick={middleware} /*to={"/"}*/ className={"menu-button " + color}>Cerrar sesión</Link>
        { popup === "sure" && <Sure setPopup={ setPopup }/> }
        </>
    );
}

export default SesionButton;