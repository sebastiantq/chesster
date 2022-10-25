import React from "react";
import "./Footer/Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="footer-top">
        {/* LEFT SEPARATION */}
        <div className="footer-separation">
          <div className="left-center">
            <div className="image-div">
              <img src={"/javelogo.png"} alt={"Chess"} className="img-logo" />
            </div>
            <div className="info-left-div">
              <p className="developers">Desarrolladores:</p>
              <ul className="list-style">
                <li>Sebastian Tobar Q.</li>
                <li>Juan Ignacio Gándara</li>
                <li>Sebastián Hernández</li>
              </ul>
            </div>
          </div>
        </div>
        {/* MID SEPARATION */}
        <div className="footer-separation">
          <div className="mid-center">
            {/* <div className="image-div">
              <img
                src={"/good-idea-image.png"}
                alt={"help-idea"}
                className="img-log"
              ></img>
            </div> */}
            <div className="info-div">
              <p>Ayudanos</p>
              <p>Servicios</p>
              <p>¿Buscas un empleo?</p>
              <p>¿En que podemos mejorar?</p>
              <p>¿Necesitas ayuda?</p>
            </div>
          </div>
        </div>
        {/* RIGHT SEPARATION */}
        <div className="footer-separation">
          <div className="right-center">
            {/* <div className="image-div">
              <img
                src={"/helpbot.png"}
                alt={"help-bot"}
                className="img-log"
              ></img>
            </div> */}
            <div className="info-div">
              <p>Acerca de nosotros</p>
              <p>Afiliados</p>
              <p>Contáctanos</p>
              <div className="icons-right-div">
                <div className="phone-email-div">
                  <ion-icon
                    className="phone-icon"
                    name="call-outline"
                  ></ion-icon>
                  <p> +57 305-332-5692</p>
                </div>
                <div className="phone-email-div">
                  <ion-icon name="mail-outline"></ion-icon>
                  <p>contacto@chesster.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <div className="bottom-content-div">
          <div className="bottom-icons">
            <div className="icons-bottom-div">
              <ion-icon name="logo-instagram"></ion-icon>
            </div>
            <div className="icons-bottom-div">
              <ion-icon name="logo-facebook"></ion-icon>
            </div>
            <div className="icons-bottom-div">
              <ion-icon name="logo-youtube"></ion-icon>
            </div>
            <div className="icons-bottom-div">
              <ion-icon name="logo-twitter"></ion-icon>
            </div>
            <div className="icons-bottom-div">
              <ion-icon name="logo-twitch"></ion-icon>
            </div>
          </div>
          <p className="copyright">
            {" "}
            &#128507;{new Date().getFullYear()} ESTA PAGINA FUE CREADA SIN FINES
            DE LUCRO | PROPÓSITO CON FIN ESTUDIANTIL Y PRIVADO
          </p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
