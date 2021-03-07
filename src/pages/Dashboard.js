import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Dashboard from '../modules/Dashboard'
import { getLaunchesRequested } from '../store/actions/launches'

function DashboardPage() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getLaunchesRequested())
  }, [])

  return <Dashboard />
}

export default DashboardPage
