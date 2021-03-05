import styled from 'styled-components'
import { getColumnWidth } from '../../utils/helpers'

export const LaunchesWrapper = styled.tbody`
  display: flex;
  flex-direction: column;
`

export const LaunchWrapper = styled.tr`
  height: 40px;
  padding-left: 24px;
  display: flex;
  justify-content: space-between;
  flex: 1;
`

export const LaunchData = styled.td`
  display: flex;
  align-items: center;
  color: #1f2937;
  font-size: 12px;
  line-height: 12px;
  width: ${(props) => `${getColumnWidth(props.sizeNo)}px`};
`
