import React /*, { useEffect, useState } */ from 'react'

// import { gameSubject } from "./Juego/Game"
import Board from './Juego/Board'

function Chess() {
  // const [board, setBoard] = useState([])

  // useEffect(() => {
  //   const suscribe = gameSubject.suscribe( (game) => setBoard(game.board) )
  
  //   return suscribe.unsuscribe()
  // }, [])

  return (
    <div>
      <Board /* board={board} */></Board>
    </div>
  )
}

export default Chess