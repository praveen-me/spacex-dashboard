/* eslint-disable react/jsx-props-no-spreading */
import { useDispatch, useSelector } from 'react-redux'
import { changeFilter } from '../store/actions/filters'
import { getLaunchesRequested } from '../store/actions/launches'
import { getFiltersState } from '../store/selectors/dashboard'
import {
  Filter,
  FiltersContainer,
  FiltersIcon,
  FiltersWrapper,
} from '../styled/components/Filters'

function Filters() {
  const { currentFilter, allFilters } = useSelector(getFiltersState)

  const dispatch = useDispatch()

  function handleOnChange(event) {
    const { value } = event.target

    if (value !== currentFilter) {
      dispatch(getLaunchesRequested({ filter: value }))
      dispatch(changeFilter(value))
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
