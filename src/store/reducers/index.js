import { combineReducers } from 'redux'
import loadingReducer from './loading'

const rootReducer = combineReducers({
  loading: loadingReducer,
})

export default rootReducer
