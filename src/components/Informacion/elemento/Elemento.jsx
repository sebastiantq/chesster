import React, {useState} from "react";
import 'animate.css';
import "./Elemento.css";

function Elemento(props) {
  const [brinco, setBrico] = useState(false)
  const [contador1, setContador1] = useState(0);

  const contador_1 = () => {
    setContador1(contador1 + 1)

    setBrico(true)
    setTimeout(() => {
      setBrico(false)
    }, 1000)
  }


  return (
    <div className="elemento">
      <h3>{props.titulo}</h3>
      <p>{props.texto}</p>
      <img src={props.img} alt="imagen" border="0"></img>
      <div className="div-likes">
        <div className="show-info">
          <p className={"data " + (brinco && "animate__animated animate__bounce")}>{contador1}</p>
        </div>
        <button onClick={contador_1}>
          <ion-icon name="thumbs-up-outline"></ion-icon>
        </button>
      </div>
      <hr></hr>
    </div>
  );
}

export default Elemento;
