import React from "react";
import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom/dist";

import { setNotificacion } from "../../store/notificacion";
import { setLogueado } from "../../store/sesion";

import "./Sure.css";
import 'animate.css';

const Sure = ({ setPopup }) => {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(setLogueado(false));
    dispatch(setNotificacion("Se ha cerrado sesión"));
  };

  return (
    <div className="blur">
      <div className="login-sure">
        <div className="logo-sure">
            <div className="top-div">
              <img src="/logoChessTer.jpeg" alt="ChessTer" />
              <h2>ChessTer</h2>
            </div>
          <button
            onClick={() => {
              setPopup("");
            }}
          >
            X
          </button>
        </div>
        <hr/>
        <div className="mid-div">
            <p class="animate__animated animate__bounceInDown">¿Seguro quieres cerrar tu sesión actual?</p>
        </div>
        <div className="div-buttons">
            <button onClick={() => {
                setPopup("");logout();
            }}>Si</button>
            <button onClick={() => {
              setPopup("");
            }}>No</button>
        </div>
      </div>
    </div>
  );
};

export default Sure;
