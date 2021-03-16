export function getAllLaunches(state) {
  const { launches, filters } = state

  const { currentPage, data } = launches
  const { currentFilter, currentDateFilter } = filters

  return (
    data[currentFilter] &&
    data[currentFilter][currentDateFilter] &&
    data[currentFilter][currentDateFilter]?.docs[currentPage]
  )
}

export function getPageStatus(state) {
  const { launches, filters } = state

  const { data, currentPage } = launches
  const { currentFilter, currentDateFilter } = filters

  const [, ...result] = Array(
    data[currentFilter] && data[currentFilter][currentDateFilter]
      ? data[currentFilter][currentDateFilter]?.docs.totalPages + 1
      : 0
  ).keys()
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
  return {
    dateFilters,
    currentDateFilter,
  }
}
