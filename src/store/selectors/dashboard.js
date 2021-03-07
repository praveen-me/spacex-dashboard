export function getAllLaunches(state) {
  const { launches, filters } = state

  const { currentPage, data } = launches
  const { currentFilter } = filters

  return data[currentFilter] && data[currentFilter][currentPage]
}

export function getPageStatus(state) {
  const { launches } = state

  const { totalPages, currentPage } = launches

  const [, ...result] = Array(totalPages + 1).keys()
  return {
    allPages: result,
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
