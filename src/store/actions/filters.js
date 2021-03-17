export const filterActionTypes = {
  CHANGE_FILTER: 'CHANGE_FILTER',
  CHANGE_DATE_FILTER: 'CHANGE_DATE_FILTER',
  TOGGLE_CUSTOM_FILTER_FLAG: 'TOGGLE_CUSTOM_FILTER_FLAG',
}

export const filterQueries = {
  all: {},
  failed: {
    success: false,
  },
  successfull: {
    success: true,
  },
  upcoming: {
    upcoming: true,
  },
}

export function changeFilter(filter) {
  return {
    type: filterActionTypes.CHANGE_FILTER,
    payload: filter,
  }
}

export function changeDateFilter(filter) {
  return {
    type: filterActionTypes.CHANGE_DATE_FILTER,
    payload: filter,
  }
}

export function toogleFilterByCustomDates() {
  return {
    type: filterActionTypes.TOGGLE_CUSTOM_FILTER_FLAG,
  }
}
