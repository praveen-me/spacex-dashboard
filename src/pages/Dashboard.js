import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Dashboard from '../modules/Dashboard'
import { changeDateFilter, changeFilter } from '../store/actions/filters'
import { getLaunchesRequested } from '../store/actions/launches'
import useQuery from '../utils/hooks/useQuery'

function DashboardPage() {
  const dispatch = useDispatch()
  const query = useQuery()

  useEffect(() => {
    const filter = query.get('filter')
    const dateFilter = query.get('dateFilter')

    if (!filter && !dateFilter) {
      dispatch(getLaunchesRequested())
    }
  }, [])

  useEffect(() => {
    const filter = query.get('filter')
    const dateFilter = query.get('dateFilter')

    dispatch(getLaunchesRequested({ filter, dateFilter }))

    if (filter) {
      dispatch(changeFilter(filter))
    }

    if (dateFilter) {
      dispatch(changeDateFilter(dateFilter))
    }
  }, [query])

  return <Dashboard />
}

export default DashboardPage
