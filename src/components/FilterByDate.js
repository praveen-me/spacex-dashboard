import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
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
import useQuery from '../utils/hooks/useQuery'

function FilterByDate() {
  const { currentDateFilter, dateFilters, currentFilterData } = useSelector(
    getDateFilters
  )
  const isLauchesByCustomDates = useSelector(isLaunchesByCustomDates)

  const wrapperRef = useRef(null)

  const [showFilters, setShowFilters] = useState(false)
  const [customDates, setCustomDates] = useState(null)

  const history = useHistory()
  const query = useQuery()

  useEffect(() => {
    const initialDates = !currentFilterData.dates.start
      ? null
      : moment.range(
          moment(currentFilterData.dates.start),
          moment(currentFilterData.dates.end)
        )
    setCustomDates(initialDates)
  }, [currentFilterData])

  useEffect(() => {
    if (isLauchesByCustomDates) {
      const start = query.get('start')
      const end = query.get('end')
      setCustomDates(
        moment.range(moment(new Date(start)), moment(new Date(end)))
      )
    }
  }, [isLauchesByCustomDates])

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
    const startDate = dates.start.toISOString()
    const endDate = dates.end.toISOString()
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
        <CurrentFilter>
          {isLauchesByCustomDates ? 'Custom Dates' : currentFilterData.label}
        </CurrentFilter>
        <FilterByDateIcon src={svg.arrowRight} rotate="90deg" />
      </CurrentFilterWrapper>
      {showFilters && (
        <FilterByDateOverlay onClick={handleDismiss} ref={wrapperRef}>
          <FilterByDateContainer>
            <DateFiltersByLabelContainer>
              {dateFilters.map((filter) => (
                <DateFiltersByLabel
                  onClick={() => onFilterClick(filter.value)}
                  key={filter.label}
                  active={
                    isLauchesByCustomDates
                      ? false
                      : filter.value === currentDateFilter
                  }
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
