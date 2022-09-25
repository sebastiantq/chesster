import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"

const middleware = [ thunk ]

const composedEnhancers = composeWithDevTools(
    applyMiddleware(...middleware)
)

const store = createStore(composedEnhancers)

export default store