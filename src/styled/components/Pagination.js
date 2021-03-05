/* eslint-disable no-nested-ternary */
import styled from 'styled-components'

export const PaginationWrapper = styled.div`
  display: flex;
  width: 240px;
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

  ${(props) => !props.last && `border-right : 1px solid #e4e4e7;`}
`

export const PaginationIcon = styled.img``
