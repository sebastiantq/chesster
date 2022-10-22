import React from 'react'
import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'

import "./Register.css"

const Register = ({ setPopup }) => {
  // const navigate = useNavigate()

  const [inputs, setInputs] = useState({
      username: "",
      email: "",
      password: "",
      cpassword: ""
  })

  // const { username, password } = inputs

  // const usuarios = ["usuario1"]
  // const contraseñas = {
  //     "usuario1": "contraseña"
  // }

  const preventSpace = (event) => {
    if (event.key === 32) {
        event.preventDefault();
    }
  }

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value })
  }

  return (
    <div className='blur'>
      <div className='register'>
        <form>
          <div className='logo'>
            <a href="/" className='logo'>
              <div className="top">
                <img src="/logoChessTer.jpeg" alt="ChessTer"/>
                <h2>ChessTer</h2>
              </div>
            </a>
            <button onClick={() => { setPopup("") }}>X</button>
          </div>
          <div className="user">
            <label htmlFor="username">Usuario:</label>
            <input type="text" onChange={() => { handleChange(); preventSpace() }} name="username"/>
          </div>
          <div className="email">
            <label htmlFor="email">Correo electrónico:</label>
            <input type="text" onChange={() => { handleChange(); preventSpace() }} name="email"/>
          </div>
          <div className="pass">
            <label htmlFor="password">Clave:</label>
            <input type="password" onChange={handleChange} name="password"/>
          </div>
          <div className="pass">
            <label htmlFor="cpassword">Confirma tu clave:</label>
            <input type="password" onChange={handleChange} name="cpassword"/>
          </div>
          <div className="buttons">
            <button type='submit'>Registrarse</button>
            <button className="enlace" onClick={ () => { /* navigate("/login") */ setPopup("login") } }>Ya tengo una cuenta</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register