import { calculatePastDate } from '../../utils/helpers'
import { filterActionTypes } from '../actions/filters'

const dateFilters = [
  {
    label: 'All Launches By Date',
    dates: {
      start: null,
      end: null,
    },
  },
  {
    label: 'Past Week',
    dates: {
      start: calculatePastDate(),
      end: calculatePastDate(1, 'week'),
    },
  },
  {
    label: 'Past Month',
    dates: {
      start: calculatePastDate(),
      end: calculatePastDate(1, 'month'),
    },
  },
  {
    label: 'Past 3 Months',
    dates: {
      start: calculatePastDate(),
      end: calculatePastDate(3, 'month'),
    },
  },
  {
    label: 'Past 6 Months',
    dates: {
      start: calculatePastDate(),
      end: calculatePastDate(6, 'month'),
    },
  },
  {
    label: 'Past Year',
    dates: {
      start: calculatePastDate(),
      end: calculatePastDate(1, 'year'),
    },
  },
  {
    label: 'Past 2 Years',
    dates: {
      start: calculatePastDate(),
      end: calculatePastDate(2, 'year'),
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

    default:
      return state
  }
}
