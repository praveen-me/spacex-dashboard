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

// export const getLaunchesByFilter = (filter) => async (dispatch, getState) => {
//   const { launches } = getState()
//   const { limit, currentPage } = launches

//   // If data is already present
//   // then on change page nuumber
//   if (launches.data[page]) {
//     dispatch(changeCurrentPage(page))
//     return
//   }

//   dispatch(toggleLoading())
//   try {
//     const { data } = await getLaunches({ page: page || currentPage, limit })

//     dispatch(dispatchSetLaunches(data))
//   } catch (e) {
//     console.log(e)
//   } finally {
//     dispatch(toggleLoading())
//   }
// }
