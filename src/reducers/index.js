import { combineReducers } from "redux"
import playerReducer from "./player"

const allReducers = combineReducers({
    player: playerReducer
})

export default allReducers