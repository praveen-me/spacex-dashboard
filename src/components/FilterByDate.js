import { useState } from 'react'
import { useSelector } from 'react-redux'
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

function FilterByDate() {
  const [showFilters, setShowFilters] = useState(false)

  const { currentDateFilter, dateFilters } = useSelector(getDateFilters)

  function onFilterClick() {
    console.log(currentDateFilter, setShowFilters)
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

  return (
    <FilterByDateOverlay>
      <FilterByDateContainer>
        <DateFiltersByLabelContainer>
          {dateFilters.map((filter) => (
            <DateFiltersByLabel onClick={onFilterClick}>
              {filter.label}
            </DateFiltersByLabel>
          ))}
        </DateFiltersByLabelContainer>
        <div>Some time</div>
      </FilterByDateContainer>
    </FilterByDateOverlay>
  )
}

export default FilterByDate
