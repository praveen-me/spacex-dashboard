import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'
import DateRangePicker from 'react-daterange-picker'
import 'react-daterange-picker/dist/css/react-calendar.css'

import svg from '../assets/svg'
import { getDateFilters } from '../store/selectors/dashboard'
import {
  CurrentFilter,
  CurrentFilterWrapper,
  DateFiltersByLabel,
  DateFiltersByLabelContainer,
  FilterByDateContainer,
  FilterByDateIcon,
  FilterByDateOverlay,
} from '../styled/components/FilterByDate'
import { changeDateFilter } from '../store/actions/filters'
import { getLaunchesRequested } from '../store/actions/launches'

function FilterByDate() {
  const { currentDateFilter, dateFilters } = useSelector(getDateFilters)
  const dispatch = useDispatch()
  const currentFilter = dateFilters.find(
    (filter) => filter.label === currentDateFilter
  )
  const wrapperRef = useRef(null)

  const [showFilters, setShowFilters] = useState(false)
  const [customDates, setCustomDates] = useState(null)

  useEffect(() => {
    const initialDates = !currentFilter.dates.start
      ? null
      : moment.range(
          moment(currentFilter.dates.end),
          moment(currentFilter.dates.start)
        )
    setCustomDates(initialDates)
  }, [currentDateFilter])

  function toggleFilter() {
    setShowFilters(!showFilters)
  }

  function onFilterClick(filter) {
    dispatch(getLaunchesRequested({ dateFilter: filter }))
    dispatch(changeDateFilter(filter))
    toggleFilter()
  }

  function handleDateSelect(dates) {
    setCustomDates(dates)
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
