import { launchesActionTypes } from '../actions/launches'

const initLaunchesByCustomDates = { data: {}, totalPages: 0 }

const initState = {
  limit: 10,
  data: {},
  currentPage: 1,
  launchesByCustomDates: initLaunchesByCustomDates,
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
      if (!action.payload.data) {
        return {
          ...state,
          launchesByCustomDates: initLaunchesByCustomDates,
        }
      }

      const { replace, launches } = action.payload.data

      const { docs = [], page = 0, totalPages = 0 } = launches

      const launchesByCustomDatesCopy = replace
        ? initLaunchesByCustomDates
        : state.launchesByCustomDates

      return {
        ...state,
        launchesByCustomDates: {
          ...launchesByCustomDatesCopy,
          data: {
            ...launchesByCustomDatesCopy.data,
            [page]: docs,
          },
          totalPages,
        },
      }
    }

    default:
      return state
  }
}
