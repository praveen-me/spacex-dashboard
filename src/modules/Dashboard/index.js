import { useSelector } from 'react-redux'
import FilterByDate from '../../components/FilterByDate'
import Filters from '../../components/Filters'
import Loader from '../../components/Loader'
import Pagination from '../../components/Pagination'
import { getIsLoading } from '../../store/selectors/loading'
import {
  DashboardTableColumn,
  DashboardTableHead,
  DashboardWrapper,
  TableRow,
  Container,
  FiltersWrapper,
} from '../../styled/modules/Dashboard'
import { tableColumns } from '../../utils/helpers'
import Launches from './Launches'

function Dashboard() {
  const isLoading = useSelector(getIsLoading)

  return (
    <Container>
      <FiltersWrapper>
        <FilterByDate />
        <Filters />
      </FiltersWrapper>
      <DashboardWrapper>
        <DashboardTableHead>
          <TableRow>
            {tableColumns.map((column, index) => (
              <DashboardTableColumn key={column} sizeNo={index + 1}>
                {column}
              </DashboardTableColumn>
            ))}
          </TableRow>
        </DashboardTableHead>
        {isLoading ? <Loader /> : <Launches />}
      </DashboardWrapper>
      <Pagination />
    </Container>
  )
}

export default Dashboard
