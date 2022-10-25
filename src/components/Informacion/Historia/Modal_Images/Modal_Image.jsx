import React from 'react'
import "./Modal_Images.css"

function Modal_Image(props,{setPopup}){

    return (
        <div className='blur_img'>
            <div className="div_modal_container">
                <button onClick={() => { setPopup("") }}>X</button>
            </div>
            <div className='div_img_modal'>
                <div className="top_img_div">
                    <img src={props.src_img} alt={props.alt_img} className="img"></img>
                </div>
                <div className="bot_modal">
                    <p className='paragraph'>{props.parrafo}</p>
                </div>
            </div>
        </div>
    )
}

export default Modal_Image