/* eslint-disable no-restricted-globals */
/* eslint-disable react/jsx-props-no-spreading */
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import svg from '../assets/svg'
import { getFiltersState } from '../store/selectors/dashboard'
import {
  Filter,
  FiltersContainer,
  FiltersIcon,
  FiltersWrapper,
  Option,
  OptionsWrapper,
} from '../styled/components/Filters'
import useQuery from '../utils/hooks/useQuery'

function Filters() {
  const [showFilter, setShowFilter] = useState(false)

  const { currentFilter, allFilters } = useSelector(getFiltersState)
  const history = useHistory()
  const query = useQuery()

  function toggleFilter() {
    setShowFilter(!showFilter)
  }

  function handleOnChange(filter) {
    if (filter !== currentFilter) {
      const newFilter = query.get('filter')
      const currentPage = query.get('page')

      let searchString = location.search

      if (currentPage) {
        searchString = searchString.replace(/[&]?page=[0-9]*[&]?/g, ``)
      }

      if (!newFilter) {
        history.push(
          searchString
            ? `${searchString}&filter=${filter}`
            : `/?filter=${filter}`
        )
      } else {
        const n = searchString.replace(/filter=[a-z]*/g, `filter=${filter}`)
        history.push(`/${n}`)
      }

      toggleFilter()
    }
  }

  const currentFilterLabel = allFilters.find(
    (filter) => filter.value === currentFilter
  )?.label

  return (
    <FiltersContainer>
      <FiltersWrapper onClick={toggleFilter}>
        <FiltersIcon src={svg.calender} />
        <Filter>{currentFilterLabel}</Filter>
        <FiltersIcon src={svg.arrowRight} rotate="90deg" />
      </FiltersWrapper>
      {showFilter && (
        <OptionsWrapper>
          {allFilters.map((filter) => (
            <Option
              active={filter.value === currentFilter}
              onClick={() => handleOnChange(filter.value)}
              key={filter.label}
            >
              {filter.label}
            </Option>
          ))}
        </OptionsWrapper>
      )}
    </FiltersContainer>
  )
}

export default Filters
