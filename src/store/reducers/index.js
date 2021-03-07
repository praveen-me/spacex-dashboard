import { combineReducers } from 'redux'
import lauchesReducer from './launches'
import loadingReducer from './loading'

const rootReducer = combineReducers({
  loading: loadingReducer,
  launches: lauchesReducer,
})

export default rootReducer
