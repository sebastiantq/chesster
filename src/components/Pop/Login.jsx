import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import "./Login.css"

const Login = ({ setPopup }) => {
    const navigate = useNavigate()

    const [inputs, setInputs] = useState({
        username: "",
        password: ""
    })

    const { username, password } = inputs

    const [estadoLogin, setEstadoLogin] = useState("")

    const usuarios = ["usuario1"]
    const contraseñas = {
        "usuario1": "contraseña"
    }

    const preventSpace = (event) => {
        console.log("asd")
        if (event.key === 32) {
            console.log("ass")
            event.preventDefault();
        }
    }

    const login = () => {
        if(usuarios.includes(username) && password === contraseñas[username]){
            console.log("Logueado")
            navigate("/")
        }else{
            console.log("User: " + username + " & pass: " + password + ", db: " + contraseñas[username])
            console.log("1. " + usuarios.includes(username))
            console.log("2. " + password === contraseñas[username])
            setEstadoLogin("Usuario y/o contraseña incorrecta")
        }   
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        login()
    }

    const handleChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value })
    }

    return (
        <div className='blur'>
            <div className='login'>
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
                    <div className="user">
                        <label htmlFor="username">Usuario/Correo electrónico:</label>
                        <input onChange={() => { handleChange(); preventSpace() }} type="text" name="username" required/>
                    </div>
                    <div className="pass">
                        <label htmlFor="password">Clave:</label>
                        <input onChange={handleChange} type="password" name="password" required/>
                    </div>
                    <p>Estado: {estadoLogin}</p>
                    <br />
                    <div className="buttons">
                        <button type='submit'>Iniciar sesión</button>
                        <button className='enlace'>Olvidaste tu contraseña</button>
                        <button className='enlace' onClick={ () => { /* navigate("/register") */ setPopup("register") } }>Sing Up</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login