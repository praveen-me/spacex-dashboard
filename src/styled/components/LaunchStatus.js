import styled from 'styled-components'

export const StatusWrapper = styled.span`
  padding: 0.25rem 0.75rem;
  border-radius: 1.25rem;

  background-color: ${(props) => {
    switch (props.type) {
      case 'sucess':
        return '#DEF7EC'
      case 'failed':
        return '#FDE2E1'
      default:
        return '#FEF3C7'
    }
  }};
`

export const StatusText = styled.div`
  font-weight: 500;
  font-size: 12px;
  color: ${(props) => {
    switch (props.type) {
      case 'sucess':
        return '#03543F'
      case 'failed':
        return '#981B1C'
      default:
        return '#92400F'
    }
  }};
`
