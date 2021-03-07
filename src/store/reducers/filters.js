import { filterActionTypes } from '../actions/filters'

const initialState = {
  currentFilter: 'all',
  allFilters: [
    {
      label: 'All Launches',
      value: 'all',
    },
    {
      label: 'Upcoming Launches',
      value: 'upcoming',
    },
    {
      label: 'Successful Launches',
      value: 'successfull',
    },
    {
      label: 'Failed Launches',
      value: 'failed',
    },
  ],
}

export default function filtersReducer(state = initialState, action) {
  switch (action.type) {
    case filterActionTypes.CHANGE_FILTER: {
      return {
        ...state,
        currentFilter: action.payload,
      }
    }

    default:
      return state
  }
}
