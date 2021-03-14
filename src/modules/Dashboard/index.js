import FilterByDate from '../../components/FilterByDate'
import Filters from '../../components/Filters'
import Loader from '../../components/Loader'
import Pagination from '../../components/Pagination'
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
        <Launches />
      </DashboardWrapper>
      <Pagination />
      <Loader />
    </Container>
  )
}

export default Dashboard
