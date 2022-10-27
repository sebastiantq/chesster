import React from 'react'
import { useCallback } from 'react';
import { useEffect } from 'react';

import { useDispatch /*, useSelector */ } from "react-redux";
// import { useNavigate } from "react-router-dom/dist";

import { setNotificacion } from "../../store/notificacion"
// import { selectNotificacion } from "../../store/notificacion/selectors"

import "./Notification.css"

const Notification = (props) => {
  const dispatch = useDispatch()

  const close = useCallback(() => {
    dispatch(setNotificacion(null))
  }, [dispatch])

  useEffect(() => {
    setTimeout(() => {
      close()
    }, 5000)
  }, [close])

  return (
    <div id="notif" className="not">
        <div className='not-top'>
            <h2>Notificacion</h2>
            <button onClick={close}>X</button>
        </div>
        <div className='not-bot'>
            <p align="left">{ props.text }</p>
        </div>
    </div>
  )
}

export default Notification