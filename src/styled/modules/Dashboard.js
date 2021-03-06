import styled from 'styled-components'
import { getColumnWidth } from '../../utils/helpers'

const DataColumn = styled.td`
  display: flex;
  align-items: center;
  font-size: 12px;
  line-height: 12px;
  width: ${(props) => `${getColumnWidth(props.sizeNo)}px`};
`

export const Container = styled.main`
  width: 960px;
  margin: 3rem auto;
`

export const DashboardWrapper = styled.table`
  background: #fff;
  border: 1px solid #e4e4e7;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  overflow: hidden;
  display: block;
`
export const DashboardTableHead = styled.thead`
  background: #f4f5f7;
  display: flex;
`

export const TableRow = styled.tr`
  padding-left: 24px;
  display: flex;
  justify-content: space-between;
  flex: 1;
  height: 40px;
`

export const DashboardTableColumn = styled(DataColumn)`
  color: #4b5563;
  font-weight: 500;
`

export const LaunchesWrapper = styled.tbody`
  display: flex;
  flex-direction: column;
`

export const LaunchData = styled(DataColumn)`
  color: #1f2937;
`
