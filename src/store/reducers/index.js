import { combineReducers } from 'redux'
import filtersReducer from './filters'
import lauchesReducer from './launches'
import loadingReducer from './loading'

const rootReducer = combineReducers({
  loading: loadingReducer,
  launches: lauchesReducer,
  filters: filtersReducer,
})

export default rootReducer
