import React from "react";

import "./Card/Card.css"

function Card(props){
    return(
        <div className="card">
            <div className="card-top">
                <div className="top-img">
                    <p>{props.numero}</p>
                </div>
                <div className="top-title">
                    <p className="title">{props.titulo}</p>
                </div>
            </div>
            <div className="card-bot">
                <img src={props.img} alt="historia"></img>
            </div>
        </div>
    )
}

export default Card