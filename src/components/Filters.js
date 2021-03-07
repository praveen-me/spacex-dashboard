/* eslint-disable react/jsx-props-no-spreading */
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getFiltersState } from '../store/selectors/dashboard'
import {
  Filter,
  FiltersContainer,
  FiltersIcon,
  FiltersWrapper,
} from '../styled/components/Filters'

function Filters() {
  const { currentFilter, allFilters } = useSelector(getFiltersState)
  const history = useHistory()

  function handleOnChange(event) {
    const { value } = event.target

    if (value !== currentFilter) {
      history.push(`/?filter=${value}`)
    }
  }

  return (
    <FiltersWrapper>
      <FiltersIcon />
      <FiltersContainer onChange={handleOnChange} value={currentFilter}>
        {allFilters.map((filter) => (
          <Filter {...filter} key={filter.value} />
        ))}
      </FiltersContainer>
    </FiltersWrapper>
  )
}

export default Filters
