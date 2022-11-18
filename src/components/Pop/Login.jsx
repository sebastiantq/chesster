import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";

// import {auth, userExist} from '../../firebase/Firebase';

import { setNotificacion } from "../../store/notificacion";
import { setLogueado } from "../../store/sesion";

import { app } from '../../firebase/Firebase';
import Register from './Register';

import "./Login.css";
// import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
// import { useEffect } from 'react';
//import AuthProvider from './AuthProvider';


const Login = ({ setPopup }) => {
    
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [usuario, setUsuario] = useState(null)

    const [inputs, setInputs] = useState({
        username: "",
        password: ""
    })

    
    // const [currentUser, setCurrentUser] = useState(null);
    // const [state, setCurrentState] = useState(0);

    /*
    State
    0:inicializar
    1:loading
    2:login completo
    3:login pero sin registro
    4:nadie logueado
    */

    const { username, password } = inputs

    const [estadoLogin, setEstadoLogin] = useState("")

    const usuarios = ["sebastianh", "sebastiant", "juan"]
    const contraseñas = {
        "sebastianh": "sebastianh",
        "sebastiant": "sebastiant",
        "juan": "juan"
    }

    // useEffect(() => {
    //     setCurrentState(4)
    //     onAuthStateChanged(auth, handleUserStateChanged);
    // },[])

    // async function handleUserStateChanged(user){
    //     if(user){
    //         const isRegistered = await userExist(user.uid)
    //         if(isRegistered){
    //             setCurrentState(2)
    //             console.log("Me loguie")
    //         }else{
    //             setCurrentState(3)
    //             console.log("logueado pero no registrado")
    //         }
    //         console.log(user.displayName)
    //     }else{
    //         setCurrentState(4)
    //         console.log('no hay nadie autenticado')
    //     }
    // }


    // async function reDirect(){
    //     if(state === 2){
    //         setPopup("")
    //         dispatch(setNotificacion("Login exitoso, doctor" + currentUser.displayName))
    //         dispatch(setLogueado(true))
    //         navigate("/jugar")
    //     }
    //     if (state === 3){
    //         setPopup("register")
    //     }
    // }

    // async function handleOnClick(){
    //     const googleProvider = new GoogleAuthProvider()
    //     signInWithGoogle(googleProvider)
    //     async function signInWithGoogle( googleProvider ){
    //         try {
    //             const res = await signInWithPopup(auth, googleProvider)
    //             reDirect()
    //             console.log(res)
    //         }catch (error){
    //             console.error(error)
    //         }
    //     }
    // }

    const login = () => {

        if(usuarios.includes(username) && password === contraseñas[username]){

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
            setEstadoLogin("Usuario y/o contraseña incorrecta")
        }   
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
                    {/* <div className="googleButtonDiv">
                        <button className='googleButton' onClick={ handleOnClick }> 
                            <ion-icon name="logo-google"></ion-icon>
                            Iniciar Sesión Con Google 
                         </button>
                    </div>
                    <hr/> */}
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