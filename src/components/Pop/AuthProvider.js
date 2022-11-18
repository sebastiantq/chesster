import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";

import {auth, userExist} from '../../firebase/Firebase';

import { setNotificacion } from "../../store/notificacion";
import { setLogueado } from "../../store/sesion";

import "./Login.css";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import { useEffect } from 'react';



export default function AuthProvider({children, onUserLoggedIn, onUserNotLoggedIn}){
    
    const navigate = useNavigate()
    const dispatch = useDispatch()


    const [state, setCurrentState] = useState(0);

    useEffect(() => {
        onAuthStateChanged(auth, handleUserStateChanged);
    },[]);

    async function handleUserStateChanged(user){
        if(user){
            const isRegistered = await userExist(user.uid)
            if(isRegistered){
                setCurrentState(2)
                console.log("Me loguie")
            }else{
                setCurrentState(3)
                console.log("logueado pero no registrado")
            }
            console.log(user.displayName)
        }else{
            setCurrentState(4)
            console.log('no hay nadie autenticado')
        }
    }
    
    async function reDirect(){
        if(state === 2){
            dispatch(setNotificacion("Login exitoso, doctor" ))
            dispatch(setLogueado(true))
            navigate("/jugar")
        }
        if (state === 3){
        }
    }

    return console.log(children)
}