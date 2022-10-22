import React from "react";
import "./Footer/Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="footer-left">
        {/* <div className="space_div"></div> */}
        <div className="image-div">
          <img src={"/chess_piece_white.png"} alt={"Chess"} className="img-piece" />
        </div>
        <div className="info-div">
          <p className="title-contact">Contactanos</p>
          <div className="phone-div">
            <ion-icon className="phone-icon" name="call-outline"></ion-icon>
            <p className="phone-footer"> +57 305-332-5692</p>
          </div>
          <div className="email-div">
            <ion-icon name="mail-outline"></ion-icon>
            <p className="email-footer">chesster@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="footer-center">
        <div className="recomendation-title">
          <p className="help">Preguntas Frecuentes</p>
        </div>
        <div className="recomendation-text"></div>
      </div>
      <div className="footer-right"></div>
    </div>
  );
};

export default Footer;
