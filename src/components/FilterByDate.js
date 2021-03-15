import { useEffect, useState } from 'react'
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

function FilterByDate() {
  const { currentDateFilter, dateFilters } = useSelector(getDateFilters)
  const dispatch = useDispatch()
  const currentFilter = dateFilters.find(
    (filter) => filter.label === currentDateFilter
  )

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

  function onFilterClick(filter) {
    dispatch(changeDateFilter(filter))
  }

  function toggleFilter() {
    setShowFilters(!showFilters)
  }

  if (!showFilters) {
    return (
      <CurrentFilterWrapper onClick={toggleFilter}>
        <FilterByDateIcon src={svg.calender} />
        <CurrentFilter>{currentDateFilter}</CurrentFilter>
        <FilterByDateIcon src={svg.arrowRight} rotate="90deg" />
      </CurrentFilterWrapper>
    )
  }

  function handleDateSelect(dates) {
    console.log(dates)

    setCustomDates(dates)
  }

  return (
    <FilterByDateOverlay>
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
  )
}

export default FilterByDate
