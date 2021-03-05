import { loadingActionTypes } from '../actions/loading'

const initialState = false

export default function loadingReducer(state = initialState, action) {
  switch (action.type) {
    case loadingActionTypes.TOGGLE_LOADING: {
      const newState = !state
      return newState
    }

    default:
      return state
  }
}
