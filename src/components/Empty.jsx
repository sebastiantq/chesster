import React from "react";
import "./Empty/Empty.css";
import 'animate.css';

const Empty = () => { 
  return (
    <div className="empty">
        <div className="center-div">
          <h4 class="animate__animated animate__tada">Oops!</h4>
          <p>
            Error 404: Página no encontrada
          </p>
          <p>
            La página que buscas no existe o fue eliminada.
          </p>
        </div>
    </div>
  );
};

export default Empty;
