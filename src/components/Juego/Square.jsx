import React from 'react'

function Square({ children, black }) {
    const backgroundClass = black ? "black-square" : "white-square"

    return (
        <div className={"board-square " + backgroundClass}>
            {children}
        </div>
    )
}

export default Square