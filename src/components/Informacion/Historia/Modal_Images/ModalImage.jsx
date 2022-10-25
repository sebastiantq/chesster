import React from "react";
import "./Modal_Images.css";

function ModalImage(props) {
    return (
        <div className="blur_img">
            <button className="out-modal-button" onClick={() => {
                            props.setPopup("");
                        }}></button>
            <div className="front">
                <div className="div_modal_container">
                    <button
                        onClick={() => {
                            props.setPopup("");
                        }}
                    >
                        X
                    </button>
                </div>
                <div className="div_img_modal">
                    <div className="top_img_div">
                        <img src={props.src_img} alt={props.alt_img} className="img"></img>
                    </div>
                    <div className="bot_modal">
                        <div className="title_modal_div">
                            <p className="title_modal">{props.title}</p>
                        </div>
                        <div className="paragraph_div">
                            <p className="paragraph">{props.paragraph}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalImage;
