import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Modal_Button.css"
import ModalImage from "./ModalImage";

const ModalButton = (props) => {

    const [popup, setPopup] = useState("") 

    const Modal = () => {
        setPopup("modal")
    }

    function disableScroll() {

        let scrollTop = window.pageYOffset || document.documentElement.scrollTop
        let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft

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
        <div className="Button-Modal-div">
            <Link onClick={Modal} className="Button_link">
                <img src={props.src_img} alt={props.alt_img} className="Img-Modal"></img>
            </Link>
            <p className="Description">{props.img_description}</p>
<<<<<<< HEAD:src/components/Informacion/Historia/Modal_Images/Modal_Button.jsx
            { popup === "modal" && <Modal_Image src_img={props.src_img} alt="Img" parrafo={props.paragraph} title={props.title} setPopup={ setPopup }/> }
=======
            { popup === "modal" && <ModalImage src_img={props.src_img} alt="Img" parrafo={props.img_description} setPopup={ setPopup }/> }
>>>>>>> 5e8184dd84c480f9374e2017fbb1348ca634e316:src/components/Informacion/Historia/Modal_Images/ModalButton.jsx
        </div>
    );
}

export default ModalButton;
