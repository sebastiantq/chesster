import React, { useEffect, useState } from 'react'

import BoardSquare from './BoardSquare'

import "./Board.css"

function Board({ board, turn }) {
    const [currBoard, setCurrBoard] = useState([])

    useEffect(() => {
        setCurrBoard(turn === "w" ? board.flat() : board.flat().reverse())
    }, [board, turn])

    const getXYPosition = (i) => {
        const x = turn === "w" ? i % 8 : Math.abs((i % 8) - 7)
        const y = turn === "w" ? Math.abs(Math.floor(i / 8) - 7) : Math.floor(i / 8)

        return { x, y }
    }

    const isBlack = (i) => {
        const { x, y } = getXYPosition(i)

        return (x + y) % 2 === 1
    }

    const getPosition = (i) => {
        const { x, y } = getXYPosition(i)
        const letter = ["a", "b", "c", "d", "e", "f", "g", "h"][x]

        return letter + (y + 1)
    }

    return (
        <div className='board'>
            { currBoard.map((piece, i) => {
                return (<div key={i} className="square">
                    <BoardSquare piece={piece} black={isBlack(i)} position={getPosition(i)}></BoardSquare>
                </div>)
            }) }
        </div>
    )
}

export default Board