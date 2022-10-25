import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom/dist";

import { setNotificacion } from "../../store/notificacion"
import { setLogueado } from "../../store/sesion"

import "./Login.css"

const Login = ({ setPopup }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [inputs, setInputs] = useState({
        username: "",
        password: ""
    })

    const { username, password } = inputs

    const [estadoLogin, setEstadoLogin] = useState("")

    const usuarios = ["sebastianh", "sebastiant", "juan"]
    const contraseñas = {
        "sebastianh": "sebastianh",
        "sebastiant": "sebastiant",
        "juan": "juan"
    }

    const login = () => {
        if(usuarios.includes(username) && password === contraseñas[username]){
            // console.log("Logueado")

            if (username === "sebastianh"){
                dispatch(setNotificacion("Login exitoso, Doctor Sebastián"))
            }else if (username === "juan"){
                dispatch(setNotificacion("Bienvenido de nuevo, Dr. Ignacio"))
            }else{
                dispatch(setNotificacion("¡Te has logueado con exito! :)"))
            }

            dispatch(setLogueado(true))
            setPopup("")
            navigate("/jugar")
        }else{
            // console.log("User: " + username + " & pass: " + password + ", db: " + contraseñas[username])
            // console.log("1. " + usuarios.includes(username))
            // console.log("2. " + password === contraseñas[username])
            setEstadoLogin("Usuario y/o contraseña incorrecta")
        }   
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        login()
    }

    const handleSpace = (event) => { // No espacios en username y email
      if (event.code === "Space") event.preventDefault()
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
                    <hr/>
                    <div className="user">
                        <label htmlFor="username">Usuario/Correo electrónico:</label>
                        <input onKeyDown={handleSpace} onChange={handleChange} type="text" name="username" required/>
                    </div>
                    <div className="pass">
                        <label htmlFor="password">Clave:</label>
                        <input onChange={handleChange} type="password" name="password" required/>
                    </div>
                    <p>{estadoLogin}</p>
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