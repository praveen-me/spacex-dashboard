/* eslint-disable no-restricted-globals */
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Dashboard from '../modules/Dashboard'
import { changeDateFilter, changeFilter } from '../store/actions/filters'
import {
  getLaunchesByCustomDates,
  getLaunchesRequested,
} from '../store/actions/launches'
import useQuery from '../utils/hooks/useQuery'

function DashboardPage() {
  const [pageLocation, setLocation] = useState(null)
  const dispatch = useDispatch()
  const query = useQuery()
  const history = useHistory()

  function fetchInitialLaunches() {
    const queryValues = [
      'filter',
      'dateFilter',
      'start',
      'end',
      'page',
    ].map((v) => query.get(v))

    if (queryValues.every((v) => !v)) {
      dispatch(changeFilter('all'))
      dispatch(changeDateFilter('all'))
      dispatch(
        getLaunchesRequested({
          initial: true,
          dateFilter: 'all',
          filter: 'all',
          page: 1,
        })
      )
    }
  }

  useEffect(() => {
    fetchInitialLaunches()
    history.listen((location) => {
      if (!location.search) {
        fetchInitialLaunches()
      }

      setLocation(location)
    })
  }, [])

  useEffect(() => {
    const filter = query.get('filter')
    const dateFilter = query.get('dateFilter')
    const start = query.get('start')
    const end = query.get('end')
    const page = query.get('page')

    dispatch(changeFilter(filter))

    dispatch(changeDateFilter(dateFilter))

    if (start && end) {
      dispatch(
        getLaunchesByCustomDates({
          filter,
          start,
          end,
          replace: true,
          page: Number(page) || 1,
        })
      )
      return
    }

    if (!start && !end && (filter || dateFilter || page)) {
      dispatch(
        getLaunchesRequested({ filter, dateFilter, page: Number(page) || 1 })
      )
    }
  }, [query, pageLocation])

  return <Dashboard />
}

export default DashboardPage
