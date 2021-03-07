/* eslint-disable no-nested-ternary */
import styled from 'styled-components'

export const PaginationWrapper = styled.div`
  display: inline-flex;
  // width: 240px;
  margin-left: auto;
  margin-top: 1.25rem;
  border: 1px solid #e4e4e7;
  border-radius: 6px;
`

export const PageBlock = styled.div`
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #4b5563;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  ${(props) => !props.last && `border-right : 1px solid #e4e4e7;`}
  ${(props) => props.currentPage && `background: #e2e1e1`}
`

export const PaginationIcon = styled.img``
