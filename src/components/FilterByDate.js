import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'
import { useHistory } from 'react-router-dom'

import DateRangePicker from 'react-daterange-picker'

import 'react-daterange-picker/dist/css/react-calendar.css'

import svg from '../assets/svg'
import {
  getDateFilters,
  isLaunchesByCustomDates,
} from '../store/selectors/dashboard'
import {
  CurrentFilter,
  CurrentFilterWrapper,
  DateFiltersByLabel,
  DateFiltersByLabelContainer,
  FilterByDateContainer,
  FilterByDateIcon,
  FilterByDateOverlay,
} from '../styled/components/FilterByDate'
import { toogleFilterByCustomDates } from '../store/actions/filters'
import useQuery from '../utils/hooks/useQuery'
import { getLaunchesByCustomDates } from '../store/actions/launches'

function FilterByDate() {
  const { currentDateFilter, dateFilters } = useSelector(getDateFilters)
  const isLauchesByCustomDates = useSelector(isLaunchesByCustomDates)

  const dispatch = useDispatch()
  const currentFilter = dateFilters.find(
    (filter) => filter.label === currentDateFilter
  )
  const wrapperRef = useRef(null)

  const [showFilters, setShowFilters] = useState(false)
  const [customDates, setCustomDates] = useState(null)

  const history = useHistory()
  const query = useQuery()

  useEffect(() => {
    const initialDates = !currentFilter.dates.start
      ? null
      : moment.range(
          moment(currentFilter.dates.start),
          moment(currentFilter.dates.end)
        )
    setCustomDates(initialDates)
  }, [currentDateFilter])

  function toggleFilter() {
    setShowFilters(!showFilters)
  }

  function onFilterClick(filter) {
    if (query.get('filter')) {
      history.push(`/?filter=${query.get('filter')}&dateFilter=${filter}`)
    } else {
      history.push(`/?dateFilter=${filter}`)
    }

    toggleFilter()
  }

  function handleDateSelect(dates) {
    setCustomDates(dates)
    if (!isLauchesByCustomDates) {
      dispatch(toogleFilterByCustomDates())
    }

    const startDate = dates.start.toISOString()
    const endDate = dates.end.toISOString()

    dispatch(
      getLaunchesByCustomDates({
        start: startDate,
        end: endDate,
      })
    )

    if (query.get('filter')) {
      history.push(
        `/?filter=${query.get('filter')}&start=${startDate}&end=${endDate}`
      )
    } else {
      history.push(`/?start=${startDate}&end=${endDate}`)
    }

    toggleFilter()
  }

  function handleDismiss(event) {
    if (event.target !== wrapperRef.current) return

    toggleFilter()
  }

  return (
    <>
      <CurrentFilterWrapper onClick={toggleFilter}>
        <FilterByDateIcon src={svg.calender} />
        <CurrentFilter>{currentDateFilter}</CurrentFilter>
        <FilterByDateIcon src={svg.arrowRight} rotate="90deg" />
      </CurrentFilterWrapper>
      {showFilters && (
        <FilterByDateOverlay onClick={handleDismiss} ref={wrapperRef}>
          <FilterByDateContainer>
            <DateFiltersByLabelContainer>
              {dateFilters.map((filter) => (
                <DateFiltersByLabel
                  onClick={() => onFilterClick(filter.label)}
                  key={filter.label}
                  active={filter.label === currentDateFilter}
                >
                  {filter.label}
                </DateFiltersByLabel>
              ))}
            </DateFiltersByLabelContainer>
            <DateRangePicker
              numberOfCalendars={2}
              selectionType="range"
              onSelect={handleDateSelect}
              value={customDates}
            />
          </FilterByDateContainer>
        </FilterByDateOverlay>
      )}
    </>
  )
}

export default FilterByDate
