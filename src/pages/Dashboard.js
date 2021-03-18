import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Dashboard from '../modules/Dashboard'
import { changeDateFilter, changeFilter } from '../store/actions/filters'
import {
  getLaunchesByCustomDates,
  getLaunchesRequested,
} from '../store/actions/launches'
import useQuery from '../utils/hooks/useQuery'

function DashboardPage() {
  const dispatch = useDispatch()
  const query = useQuery()

  useEffect(() => {
    const queryValues = ['filter', 'dateFilter', 'start', 'end'].map((v) =>
      query.get(v)
    )

    if (queryValues.every((v) => !v)) {
      dispatch(getLaunchesRequested({ initial: true }))
    }
  }, [])

  useEffect(() => {
    const filter = query.get('filter')
    const dateFilter = query.get('dateFilter')
    const start = query.get('start')
    const end = query.get('end')

    if (filter) {
      dispatch(changeFilter(filter))
    }

    if (dateFilter) {
      dispatch(changeDateFilter(dateFilter))
    }

    if (start && end) {
      dispatch(getLaunchesByCustomDates({ filter, start, end, replace: true }))
      return
    }

    if (!start && !end && (filter || dateFilter)) {
      dispatch(getLaunchesRequested({ filter, dateFilter, initial: true }))
    }
  }, [query])

  return <Dashboard />
}

export default DashboardPage
