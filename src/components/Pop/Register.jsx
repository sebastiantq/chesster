import React from 'react'
import { useNavigate } from 'react-router-dom'

import "./Register.css"

const Register = ({ setPopup }) => {
  const navigate = useNavigate()

  return (
    <div className='blur'>
      <div className='register'>
        <form>
          <a href="/" className='logo'>
            <div className="top">
              <img src="logoChessTer.jpeg" alt="ChessTer"/>
              <h2>ChessTer</h2>
            </div>
          </a>
          <div className="user">
            <label htmlFor="username">Usuario:</label>
            <input type="text" name="username"/>
          </div>
          <div className="email">
            <label htmlFor="username">Correo electrónico:</label>
            <input type="text" name="username"/>
          </div>
          <div className="pass">
            <label htmlFor="password">Clave:</label>
            <input type="text" name="password"/>
          </div>
          <div className="pass">
            <label htmlFor="cpassword">Confirma tu clave:</label>
            <input type="text" name="password"/>
          </div>
          <div className="buttons">
            <button type='submit'>Registrarse</button>
            <button className="enlace" onClick={ () => { navigate("/login") } }>Ya tengo una cuenta</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register