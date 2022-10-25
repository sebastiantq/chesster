import React from 'react'
import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'

import "./Register.css"

const Register = ({ setPopup }) => {
  // const navigate = useNavigate()

  const [estadoRegister, setEstadoRegister] = useState("")

  const [inputs, setInputs] = useState({
      username: "",
      email: "",
      password: "",
      cpassword: ""
  })

  const { username, email, password, cpassword } = inputs

  const register = () => {
    // Aqui se deben verificar todos los campos

    if (username === "" || email === "" || password === "" || cpassword === "") {
      setEstadoRegister("Hay un campo vacío")
      return
    }

    if (["sebastianh", "sebastiant", "juan"].includes(username)) {
      setEstadoRegister("El usuario ya se encuentra registrado")
      return
    }

    if (password !== cpassword) {
      setEstadoRegister("Las contraseñas no coinciden")
      return
    }

    setPopup("login")
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    register()
  }

  const handleSpace = (event) => { // No espacios en username y email
    if (event.code === "Space") event.preventDefault()
  }

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value })
  }

  return (
    <div className='blur'>
      <div className='register'>
        <form onSubmit={handleSubmit}>
          <div className='logo'>
            <a href="/" className='logo'>
              <div className="top">
                <img src="/logoChessTer.jpeg" alt="ChessTer"/>
                <h2>ChessTer</h2>
              </div>
            </a>
            <button onClick={() => { setPopup("") }}>X</button>
          </div>
          <hr/>
          <div className="user">
            <label htmlFor="username">Usuario:</label>
            <input type="text" onKeyDown={handleSpace} onChange={handleChange} name="username"/>
          </div>
          <div className="email">
            <label htmlFor="email">Correo electrónico:</label>
            <input type="text" onKeyDown={handleSpace} onChange={handleChange} name="email"/>
          </div>
          <div className="pass">
            <label htmlFor="password">Clave:</label>
            <input type="password" onChange={handleChange} name="password"/>
          </div>
          <div className="pass">
            <label htmlFor="cpassword">Confirma tu clave:</label>
            <input type="password" onChange={handleChange} name="cpassword"/>
          </div>
          <p>{estadoRegister}</p>
          <br />
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