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
    if (isLauchesByCustomDates) {
      const start = query.get('start')
      const end = query.get('end')
      setCustomDates(
        moment.range(moment(new Date(start)), moment(new Date(end)))
      )
    } else {
      const initialDates = !currentFilterData.dates.start
        ? null
        : moment.range(
            moment(currentFilterData.dates.start),
            moment(currentFilterData.dates.end)
          )
      setCustomDates(initialDates)
    }
  }, [isLauchesByCustomDates, currentFilterData])

  function toggleFilter() {
    setShowFilters(!showFilters)
  }

  function onFilterClick(filter) {
    const dateFilterQuery = query.get('dateFilter')
    const startFilter = query.get('start')
    const endFilter = query.get('end')
    const currentPage = query.get('page')

    let searchString = location.search

    if (startFilter && endFilter) {
      searchString = searchString.replace(/[&]?start=[A-Z0-9-:]*[&]?/g, ``)

      searchString = searchString.replace(/[&]?end=[A-Z0-9-:]*[&]?/g, ``)
    }

    if (currentPage) {
      searchString = searchString.replace(/[&]?page=[0-9]*[&]?/g, ``)
    }

    if (!dateFilterQuery) {
      history.push(
        searchString
          ? `${searchString}&dateFilter=${filter}`
          : `/?dateFilter=${filter}`
      )
    } else {
      const n = searchString.replace(
        /dateFilter=[a-z0-9_]*/g,
        `dateFilter=${filter}`
      )
      history.push(`/${n}`)
    }

    toggleFilter()
  }

  function handleDateSelect(dates) {
    setCustomDates(dates)
    let startDate = dates.start.toISOString()
    startDate = startDate.slice(0, startDate.indexOf('T'))

    let endDate = dates.end.toISOString()
    endDate = endDate.slice(0, endDate.indexOf('T'))

    const startFilter = query.get('start')
    const endFilter = query.get('end')
    const dateFilterQuery = query.get('dateFilter')
    const currentPage = query.get('page')

    let searchString = location.search

    if (currentPage) {
      searchString = searchString.replace(/[&]?page=[0-9]*[&]?/g, ``)
    }

    if (dateFilterQuery) {
      searchString = searchString.replace(/[&]?dateFilter=[a-z0-9_]*[&]?/g, ``)
    }

    if (!startFilter && !endFilter) {
      history.push(
        searchString
          ? `${searchString}&start=${startDate}&end=${endDate}`
          : `/?start=${startDate}&end=${endDate}`
      )
    } else {
      let dateReplaced = searchString.replace(
        /start=[A-Z0-9-:]*/g,
        `start=${startDate}`
      )
      dateReplaced = dateReplaced.replace(/end=[A-Z0-9-:]*/g, `end=${endDate}`)

      history.push(`/${dateReplaced}`)
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
