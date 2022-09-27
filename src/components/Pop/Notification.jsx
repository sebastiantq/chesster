import React from 'react'

import "./Notification.css"

const Notification = (props) => {
  const close = () => {
    // document.getElementById("notif").remove()
  }

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