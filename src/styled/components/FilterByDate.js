import styled from 'styled-components'

export const FilterByDateOverlay = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  background: #00000091;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const FilterByDateContainer = styled.div`
  padding: 2rem;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  background: #ffffff;
  position: relative;
  display: flex;
`

export const DateFiltersByLabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 1px solid #ddd;
  padding-right: 1rem;
`

export const DateFiltersByLabel = styled.button`
  text-align: left;
  padding: 0.5rem;
  ${(props) => props.active && `background: #ddd;`}

  &:focus {
    outline: none;
  }
`

export const CurrentFilterWrapper = styled.button`
  display: flex;

  &:focus {
    outline: none;
  }
`

export const CurrentFilter = styled.p`
  padding: 0 0.5rem;
  color: #4b5563;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
`

export const FilterByDateIcon = styled.img`
  ${(props) =>
    props.rotate &&
    `transform: rotate(
        ${props.rotate}
        );`}
`
