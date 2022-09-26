import React from 'react'

import "./Notification.css"

const Notification = (props) => {
  return (
    <div className="not">
        <div className='not-top'>
            <h2>Notificacion</h2>
        </div>
        <div className='not-bot'>
            <p align="left">{ props.text }</p>
        </div>
    </div>
  )
}

export default Notification