import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import account from './account'

const rootReducer = combineReducers({ account })
const sagaMiddleware = createSagaMiddleware()
const initialState = {}
const store = createStore(rootReducer, initialState, applyMiddleware(sagaMiddleware))

export default store
