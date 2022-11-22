import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { setNotificacion } from "../../store/notificacion";
import { setLogueado } from "../../store/sesion";
import { app } from '../../firebase/Firebase'
import "./Login.css";


const Login = ({ setPopup }) => {
    
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [inputs, setInputs] = useState({
        username: "",
        password: ""
    })
    const { username, password } = inputs
    const [estadoLogin, setEstadoLogin] = useState("")

    const login = () => {
        app.auth().signInWithEmailAndPassword(username,password)
        .then((usuarioFirebase) => {
            console.log(usuarioFirebase)
            if (username === "sebastianh"){
                dispatch(setNotificacion("Login exitoso, Doctor Sebastián"))
            }else if (username === "juan"){
                dispatch(setNotificacion("Bienvenido de nuevo, Dr. Ignacio"))
            }else{
                dispatch(setNotificacion("¡Te has logueado con exito! :)", usuarioFirebase.user.displayName))
            }
            dispatch(setLogueado(true))
            setPopup("")
            navigate("/jugar")
            console.log(usuarioFirebase.user.email)
        })
        .catch((error) => {
            dispatch(setNotificacion("Contraseña o Usuario Incorrecto"))
            console.log(error)
        })
    }

    const passwordForgot = (e) => {
        e.preventDefault()

        setPopup("")
        dispatch(setNotificacion("¡Próximamente!"))
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

    //Iniciar sesion con google

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
                        <button className='enlace' onClick={ passwordForgot }>Olvidaste tu contraseña</button>
                        <button className='enlace' onClick={ () => { setPopup("register") } }>Sing Up</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login