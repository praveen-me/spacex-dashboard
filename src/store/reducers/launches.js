import { launchesActionTypes } from '../actions/launches'

const initState = {
  limit: 10,
  data: {},
  currentPage: 1,
  launchesByCustomDates: {},
}

export default function lauchesReducer(state = initState, action) {
  switch (action.type) {
    case launchesActionTypes.GET_LAUNCHES: {
      const { filter, launches, dateFilter } = action.payload.data

      const { docs = [], page = 0, totalPages = 0 } = launches || {}

      return {
        ...state,
        data: {
          ...state.data,
          [filter]: {
            ...(state.data[filter] || {}),
            [dateFilter]: {
              ...((state.data[filter] && state.data[filter][dateFilter]) || {}),
              docs: {
                ...((state.data[filter] &&
                  state.data[filter][dateFilter]?.docs) ||
                  {}),
                [page]: docs,
                totalPages,
              },
            },
          },
        },
        currentPage: page,
      }
    }

    case launchesActionTypes.CHANGE_PAGE_NO: {
      return {
        ...state,
        currentPage: action.payload.data,
      }
    }

    case launchesActionTypes.LAUCHES_BY_CUSTOM_DATES: {
      return {
        ...state,
        launchesByCustomDates: action.payload.data,
      }
    }

    default:
      return state
  }
}
