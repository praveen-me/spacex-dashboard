/* eslint-disable no-undef */
import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const composeEnhancer =
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?? compose
    : compose

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)))

export default store
