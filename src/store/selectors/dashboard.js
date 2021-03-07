export function getAllLaunches(state) {
  const { launches } = state

  const { currentPage, data } = launches

  return data[currentPage]
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
