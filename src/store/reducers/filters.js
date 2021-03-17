import { calculatePastDate } from '../../utils/helpers'
import { filterActionTypes } from '../actions/filters'

const dateFilters = [
  {
    label: 'All Launches By Date',
    dates: {
      end: null,
      start: null,
    },
  },
  {
    label: 'Past Week',
    dates: {
      end: calculatePastDate(),
      start: calculatePastDate(1, 'week'),
    },
  },
  {
    label: 'Past Month',
    dates: {
      end: calculatePastDate(),
      start: calculatePastDate(1, 'month'),
    },
  },
  {
    label: 'Past 3 Months',
    dates: {
      end: calculatePastDate(),
      start: calculatePastDate(3, 'month'),
    },
  },
  {
    label: 'Past 6 Months',
    dates: {
      end: calculatePastDate(),
      start: calculatePastDate(6, 'month'),
    },
  },
  {
    label: 'Past Year',
    dates: {
      end: calculatePastDate(),
      start: calculatePastDate(1, 'year'),
    },
  },
  {
    label: 'Past 2 Years',
    dates: {
      end: calculatePastDate(),
      start: calculatePastDate(2, 'year'),
    },
  },
]

const allFilters = [
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
]

const initialState = {
  currentFilter: 'all',
  allFilters,
  dateFilters,
  currentDateFilter: dateFilters[0].label,
  dataByCustomDates: false,
}

export default function filtersReducer(state = initialState, action) {
  switch (action.type) {
    case filterActionTypes.CHANGE_FILTER: {
      return {
        ...state,
        currentFilter: action.payload,
      }
    }

    case filterActionTypes.CHANGE_DATE_FILTER: {
      return {
        ...state,
        currentDateFilter: action.payload,
      }
    }

    case filterActionTypes.TOGGLE_CUSTOM_FILTER_FLAG: {
      return {
        ...state,
        dataByCustomDates: !state.dataByCustomDates,
      }
    }

    default:
      return state
  }
}
