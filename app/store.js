import {createStore , applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import dummyReducer from "./reducers/root"
import { createLogger } from 'redux-logger'



export default createStore(
    dummyReducer,
    applyMiddleware(
        thunkMiddleware,
        createLogger()

    )
    )