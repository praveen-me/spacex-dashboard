import { launchesActionTypes } from '../actions/launches'

const initState = {
  limit: 10,
  data: {},
  currentPage: 1,
  totalPages: 0,
}

export default function lauchesReducer(state = initState, action) {
  switch (action.type) {
    case launchesActionTypes.GET_LAUNCHES: {
      const { docs = [], page = 0, totalPages = 0 } = action.payload.data || {}

      return {
        ...state,
        data: {
          ...state.data,
          [page]: docs,
        },
        totalPages,
        currentPage: page,
      }
    }

    default:
      return state
  }
}
