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
  position: relative;
`

export const DashboardWrapper = styled.table`
  background: #fff;
  border: 1px solid #e4e4e7;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  overflow: hidden;
  display: block;
  min-height: 445px;
  position: relative;
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
  ${(props) => props.showCursor && `cursor: pointer`}
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

export const FiltersWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 3rem;
`

export const ListEmptyPara = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  text-align: center;
  margin: 3rem 0;
  color: #374151;
`
