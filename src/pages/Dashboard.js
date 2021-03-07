import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Dashboard from '../modules/Dashboard'
import { changeFilter } from '../store/actions/filters'
import { getLaunchesRequested } from '../store/actions/launches'
import useQuery from '../utils/hooks/useQuery'

function DashboardPage() {
  const dispatch = useDispatch()
  const query = useQuery()

  useEffect(() => {
    const filter = query.get('filter')

    if (!filter) {
      dispatch(getLaunchesRequested())
    }
  }, [])

  useEffect(() => {
    const filter = query.get('filter')

    if (filter) {
      dispatch(getLaunchesRequested({ filter }))
      dispatch(changeFilter(filter))
    }
  }, [query])

  return <Dashboard />
}

export default DashboardPage
