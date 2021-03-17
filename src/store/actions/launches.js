import { getLaunches } from '../../utils/api'
import { toggleLoading } from './loading'
import { filterQueries } from './filters'

export const launchesActionTypes = {
  GET_LAUNCHES: 'GET_LAUNCHES',
  CHANGE_PAGE_NO: 'CHANGE_PAGE_NO',
}

function dispatchSetLaunches(data) {
  return {
    type: launchesActionTypes.GET_LAUNCHES,
    payload: {
      data,
    },
  }
}

function changeCurrentPage(pageNo) {
  return {
    type: launchesActionTypes.CHANGE_PAGE_NO,
    payload: {
      data: pageNo,
    },
  }
}

export const getLaunchesRequested = ({
  page,
  filter,
  dateFilter,
} = {}) => async (dispatch, getState) => {
  const { launches, filters } = getState()
  const { limit, currentPage } = launches
  const { dateFilters, currentDateFilter } = filters

  const searchByFilter = filter || filters.currentFilter
  const searchQuery = filterQueries[searchByFilter]
  let pageNo = page || currentPage
  const filterByDate = dateFilter || currentDateFilter

  if (
    (filter && filter !== filters.currentFilter) ||
    (dateFilter && dateFilter !== filters.currentDateFilter)
  ) {
    dispatch(changeCurrentPage(1))
    pageNo = 1
  }

  if (
    launches.data[searchByFilter] &&
    launches.data[searchByFilter][filterByDate] &&
    launches.data[searchByFilter][filterByDate].docs[pageNo]
  ) {
    dispatch(changeCurrentPage(pageNo))
    return
  }

  const currentDateFilterData = dateFilters.find(
    (f) => f.label === filterByDate
  )

  let dateQuery = {}
  if (currentDateFilterData) {
    const { dates } = currentDateFilterData

    if (dates?.start && dates?.end) {
      dateQuery = {
        date_utc: {
          $gte: dates.start,
          $lte: dates.end,
        },
      }
    }
  }

  console.log({ dateQuery })

  dispatch(toggleLoading())
  try {
    const query = { ...searchQuery, ...dateQuery }

    const { data } = await getLaunches({
      page: pageNo,
      limit,
      query,
    })

    dispatch(
      dispatchSetLaunches({
        launches: data,
        filter: searchByFilter,
        dateFilter: filterByDate,
      })
    )
  } catch (e) {
    console.log(e)
  } finally {
    dispatch(toggleLoading())
  }
}
