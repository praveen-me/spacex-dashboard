import Pagination from '../../components/Pagination'
import {
  DashboardTableColumn,
  DashboardTableHead,
  DashboardWrapper,
  TableRow,
  Container,
} from '../../styled/modules/Dashboard'
import tableColums from '../../utils/tableColums'
import Launches from './Launches'

function Dashboard() {
  return (
    <Container>
      <DashboardWrapper>
        <DashboardTableHead>
          <TableRow>
            {tableColums.map((column) => (
              <DashboardTableColumn key={column}>{column}</DashboardTableColumn>
            ))}
          </TableRow>
        </DashboardTableHead>
        <Launches />
      </DashboardWrapper>
      <Pagination />
    </Container>
  )
}

export default Dashboard
