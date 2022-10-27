import { Chess } from "chess.js"
import { BehaviorSubject } from "rxjs"

// let promotion = "rnb2bnr/pppPkppp/8/4p3/7q/8/PPPP1PPP/RNBQKBNR w KQ - 1 5"
// let staleMate = "4k3/4P3/4K3/8/8/8/8/8 b - - 0 78"
// let checkMate = "rnb1kbnr/pppp1ppp/8/4p3/5PPq/8/PPPPP2P/RNBQKBNR w KQkq - 1 3"
// let insuficcientMaterial = "k7/8/n7/8/8/8/8/7K b - - 0 1"

let semilla = ""

const chess = new Chess(semilla)

const gameSubject = new BehaviorSubject({
    board: chess.board()
})

const initGame = () => {
    const savedGame = localStorage.getItem("savedGame")

    if (semilla === "" && savedGame) chess.load(savedGame)

    updateGame()
}

const resetGame = () => {
    chess.reset()
    updateGame()
}

const handleMove = (from, to) => {
    const promotions = chess.moves({ verbose: true }).filter(m => m.promotion)
    // console.table(promotions)

    if (promotions.some(p => `${p.from}:${p.to}` === `${from}:${to}`)) {
        const pendingPromotion = { from, to, color: promotions[0].color }

        updateGame(pendingPromotion)
    }

    const { pendingPromotion } = gameSubject.getValue()
    
    if (!pendingPromotion) move(from, to)
}

const move = (from, to, promotion) => {
    let tempMove = { from, to }

    if (promotion) {
        tempMove.promotion = promotion
    }

    const legalMove = chess.move(tempMove)

    if (legalMove) updateGame()
}

const updateGame = (pendingPromotion) => {
    const isGameOver = chess.isGameOver()

    const newGame = {
        board: chess.board(),
        pendingPromotion,
        isGameOver,
        turn: chess.turn(),
        result: isGameOver ? getGameResult() : null
    }

    localStorage.setItem("savedGame", chess.fen())

    gameSubject.next(newGame)
}

const getGameResult = () => {
    if (chess.isCheckmate()) {
        const winner = chess.turn() === "w" ? "BLACK" : "WHITE"
        
        return "CHECKMATE - WINNER - " + winner
    }else if(chess.isDraw()){
        let reason = "50 - MOVES - RULE"
        
        if(chess.isStalemate()){
            reason = "STALEMATE"
        }else if(chess.isThreefoldRepetition()){
            reason = "REPETITION"
        }else if(chess.isInsufficientMaterial()){
            reason = "INSUFFICIENT MATERIAL"
        }

        return "DRAW - " + reason
    }else{
        return "UNKNOWN REASON"
    }
}

export { gameSubject, move, handleMove, initGame, resetGame }