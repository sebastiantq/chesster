import React from "react";

import InicioButton from './Menu/InicioButton';
import InfoButton from './Menu/InfoButton';
import JugarButton from './Menu/JugarButton';
import LoginButton from './Menu/LoginButton';
// import Juego from "./Juego";

const Menu = () => {
    const menuButtons = [ <InicioButton/>, <InfoButton/>, <JugarButton/>, <LoginButton/> ];

    return(
        <div className="menu">
            <div className="left-menu-div">
                <img alt='ChessTer' src={ process.env.PUBLIC_URL + "/logoChessTer.jpeg"} className="menu-logo"></img>
                <h1>ChessTer</h1>
            </div>
            <div>
                { menuButtons.map(button => (
                    button
                )) }
            </div>
        </div>
    );
}

export default Menu;