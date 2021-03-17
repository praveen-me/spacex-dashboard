import { getLaunches } from '../../utils/api'
import { toggleLoading } from './loading'
import { filterQueries, toogleFilterByCustomDates } from './filters'

export const launchesActionTypes = {
  GET_LAUNCHES: 'GET_LAUNCHES',
  CHANGE_PAGE_NO: 'CHANGE_PAGE_NO',
  LAUCHES_BY_CUSTOM_DATES: 'LAUCHES_BY_CUSTOM_DATES',
}

function dispatchSetLaunches(data) {
  return {
    type: launchesActionTypes.GET_LAUNCHES,
    payload: {
      data,
    },
  }
}

function dispatchLaunchesByCustomDates(data = null) {
  return {
    type: launchesActionTypes.LAUCHES_BY_CUSTOM_DATES,
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
  const { dateFilters, currentDateFilter, dataByCustomDates } = filters

  const searchByFilter = filter || filters.currentFilter
  const searchQuery = filterQueries[searchByFilter]
  let pageNo = page || currentPage
  const filterByDate = dateFilter || currentDateFilter

  if (dataByCustomDates) {
    dispatchLaunchesByCustomDates()
    dispatch(toogleFilterByCustomDates())
  }

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
    (f) => f.value === filterByDate
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

export const getLaunchesByCustomDates = ({
  page,
  start,
  end,
  filter,
}) => async (dispatch, getState) => {
  const { launches, filters } = getState()
  const { limit, currentPage } = launches

  try {
    dispatch(toggleLoading())

    const query = {
      date_utc: {
        $gte: start,
        $lte: end,
      },
      ...filterQueries[filter || filters.currentFilter],
    }

    const { data } = await getLaunches({
      page,
      limit,
      query,
    })

    dispatch(
      dispatchLaunchesByCustomDates({
        ...data,
      })
    )
  } catch (e) {
    console.log(e)
  } finally {
    dispatch(toggleLoading())
  }
}
