import React, { useState } from "react";

import InicioButton from './Menu/InicioButton';
import InfoButton from './Menu/InfoButton';
import JugarButton from './Menu/JugarButton';
import LoginButton from './Menu/LoginButton';
import SesionButton from './Menu/SesionButton';
// import Juego from "./Juego";

import { useSelector } from "react-redux";
import { selectLogueado } from "../store/sesion/selectors"
import { useEffect } from "react";

const Menu = () => {
    const sesion = useSelector(selectLogueado)

    const [menuButtons, setMenuButtons] = useState([ <InicioButton color="black-button"/>, <InfoButton color="white-button"/>, 
                                                     <LoginButton color="black-button"/> ])

    useEffect(() => {
        // console.log(sesion)

        if (sesion.logueado) {
            setMenuButtons([ <InicioButton color="black-button"/>, <InfoButton color="white-button"/>, 
                             <JugarButton color="black-button"/>, <SesionButton color="white-button"/> ])
        }else{
            setMenuButtons([ <InicioButton color="black-button"/>, <InfoButton color="white-button"/>, 
                             <LoginButton color="black-button"/> ])
        }
    }, [sesion])

    return(
        <div className="menu">
            <a href="/" className='logo'>
                <div className="left-menu-div">
                    <img alt='ChessTer' src={ process.env.PUBLIC_URL + "/logoChessTer.jpeg"} className="menu-logo"></img>
                    <h1>ChessTer</h1>
                </div>
            </a>
            <div>
                { menuButtons.map(button => (
                    button
                )) }
            </div>
        </div>
    );
}

export default Menu;