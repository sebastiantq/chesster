import React from 'react'
import { useNavigate } from 'react-router-dom'

import "./Login.css"

const Login = ({ setPopup }) => {
    const navigate = useNavigate()

    return (
        <div className='blur'>
            <div className='login'>
                <form>
                    <a href="/" className='logo'>
                        <div className="top">
                            <img src="logoChessTer.jpeg" alt="ChessTer"/>
                            <h2>ChessTer</h2>
                        </div>
                    </a>
                    <div className="user">
                        <label htmlFor="username">Usuario/Correo electrónico:</label>
                        <input type="text" name="username"/>
                    </div>
                    <div className="pass">
                        <label htmlFor="password">Clave:</label>
                        <input type="text" name="password"/>
                    </div>
                    <div className="buttons">
                        <button type='submit'>Iniciar sesión</button>
                        <button className='enlace'>Olvidaste tu contraseña</button>
                        <button className='enlace' onClick={ () => { navigate("/register") } }>Sing Up</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login