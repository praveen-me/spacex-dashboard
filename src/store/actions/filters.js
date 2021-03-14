export const filterActionTypes = {
  CHANGE_FILTER: 'CHANGE_FILTER',
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
