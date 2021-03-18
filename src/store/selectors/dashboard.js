export function getAllLaunches(state) {
  const { launches, filters } = state

  const { currentPage, data, launchesByCustomDates } = launches
  const { currentFilter, currentDateFilter, dataByCustomDates } = filters

  if (dataByCustomDates) {
    return launchesByCustomDates.data[currentPage]|| []
  }

  return (
    (data[currentFilter] &&
      data[currentFilter][currentDateFilter] &&
      data[currentFilter][currentDateFilter]?.docs[currentPage]) ||
    []
  )
}

export function getPageStatus(state) {
  const { launches, filters } = state

  const { data, currentPage, launchesByCustomDates } = launches
  const { currentFilter, currentDateFilter, dataByCustomDates } = filters

  let pagesNo = 0

  if (dataByCustomDates) {
    pagesNo = launchesByCustomDates?.totalPages + 1 || 1
  } else {
    pagesNo =
      data[currentFilter] && data[currentFilter][currentDateFilter]
        ? data[currentFilter][currentDateFilter]?.docs.totalPages + 1
        : 0
  }

  const [, ...result] = Array(pagesNo).keys()
  return {
    allPages: result.length ? result : [],
    currentPage,
  }
}

export function getFiltersState(state) {
  const { filters } = state
  const { allFilters, currentFilter } = filters
  return {
    allFilters,
    currentFilter,
  }
}

export function getDateFilters(state) {
  const { filters } = state
  const { dateFilters, currentDateFilter } = filters
  const currentFilterData = dateFilters.find(
    (filter) => filter.value === currentDateFilter
  )

  return {
    dateFilters,
    currentDateFilter,
    currentFilterData,
  }
}

export function isLaunchesByCustomDates(state) {
  const { filters } = state
  const { dataByCustomDates } = filters
  return dataByCustomDates
}
