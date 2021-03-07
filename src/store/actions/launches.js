import { getLaunches } from '../../utils/api'
import { toggleLoading } from './loading'

export const launchesActionTypes = {
  GET_LAUNCHES: 'GET_LAUNCHES',
}

function dispatchSetLaunches(data) {
  return {
    type: launchesActionTypes.GET_LAUNCHES,
    payload: {
      data,
    },
  }
}

export const getLaunchesRequested = (page) => async (dispatch, getState) => {
  const { launches } = getState()
  const { limit, currentPage } = launches
  dispatch(toggleLoading())
  try {
    const { data } = await getLaunches({ page: page || currentPage, limit })

    dispatch(dispatchSetLaunches(data))
  } catch (e) {
    console.log(e)
  } finally {
    dispatch(toggleLoading())
  }
}
