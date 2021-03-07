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
      const { filter, launches } = action.payload.data

      const { docs = [], page = 0, totalPages = 0 } = launches || {}

      return {
        ...state,
        data: {
          ...state.data,
          [filter]: {
            ...state.data[filter],
            [page]: docs,
          },
        },
        totalPages,
        currentPage: page,
      }
    }

    case launchesActionTypes.CHANGE_PAGE_NO: {
      return {
        ...state,
        currentPage: action.payload.data,
      }
    }

    default:
      return state
  }
}
