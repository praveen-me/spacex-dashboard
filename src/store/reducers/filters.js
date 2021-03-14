import { calculatePastDate } from '../../utils/helpers'
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
  dateFilters: [
    {
      label: 'All Launches By Date',
      dates: {
        from: null,
        to: null,
      },
    },
    {
      label: 'Past Week',
      dates: {
        from: new Date(),
        to: calculatePastDate(1, 'week'),
      },
    },
    {
      label: 'Past Month',
      dates: {
        from: new Date(),
        to: calculatePastDate(1, 'month'),
      },
    },
    {
      label: 'Past 3 Months',
      dates: {
        from: new Date(),
        to: calculatePastDate(3, 'month'),
      },
    },
    {
      label: 'Past 6 Months',
      dates: {
        from: new Date(),
        to: calculatePastDate(6, 'month'),
      },
    },
    {
      label: 'Past Year',
      dates: {
        from: new Date(),
        to: calculatePastDate(1, 'year'),
      },
    },
    {
      label: 'Past 2 Years',
      dates: {
        from: new Date(),
        to: calculatePastDate(2, 'year'),
      },
    },
  ],
  currentDateFilter: 'All Launches By Date',
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
