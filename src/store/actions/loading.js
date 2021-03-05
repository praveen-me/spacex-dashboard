export const loadingActionTypes = {
  TOGGLE_LOADING: 'TOGGLE_LOADING',
}

export function toggleLoading() {
  return {
    type: loadingActionTypes.TOGGLE_LOADING,
  }
}
