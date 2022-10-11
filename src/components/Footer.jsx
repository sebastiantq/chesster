import React from 'react'
import './Footer/Footer.css'

const Footer = () => {
    return(
        <div className='Footer'> 
            <div className="footer-left">
                <div className="phone-icon">
                    <p className='title-contact'>Contactanos</p>
                    <ion-icon className="phone-icon" name="call-outline"></ion-icon>
                    <p className='phone'> +57 305-332-5692</p>
                </div>
                <div className="email-icon">
                    <ion-icon name="mail-outline"></ion-icon>
                    <p className='email'>sebasht2003@gmail.com</p>
                </div>
            </div>
            <div className="footer-center">
                <div className="recomendation-title">
                    <p className='help'>¿En que podemos mejorar?</p>
                </div>
                <div className="recomendation-text">
                    
                </div>
            </div>
            <div className="footer-right">

            </div>
        </div>
    )
}

export default Footer;