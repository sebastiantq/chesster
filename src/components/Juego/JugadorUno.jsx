import React, { useState } from "react"

import "animate.css"

function JugadorUno(props) {
    const [microinteraccion, setMicrointeraccion] = useState(false)

    const siguiente = () => {
        if(props.jugador1.turno){
            props.setJugador1({
                movimientos: props.jugador1.movimientos + 1,
                tiempo: props.jugador1.tiempo,
                turno: false
            })
    
            props.setJugador2({
                movimientos: props.jugador2.movimientos,
                tiempo: props.jugador2.tiempo,
                turno: true
            })

            setMicrointeraccion(true)
    
            setTimeout(() => { setMicrointeraccion(false) }, 1000)
        }
    }

  return (
    <div className={"jugador-uno " + (props.jugador1.turno && "turno-activo") }>
        <h1>Jugador 1</h1>
        <button onClick={siguiente} className={"cualquiera " + (microinteraccion && "animate__animated animate__bounce")}>Siguiente</button>
    </div>
  )
}

export default JugadorUno