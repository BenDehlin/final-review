import {createStore, applyMiddleware, combineReducers} from 'react-redux'
import {promiseMiddleware} from 'redux-promise-middleware'
import reducer from './reducer'

const rootReducer = combineReducers({reducer})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware))