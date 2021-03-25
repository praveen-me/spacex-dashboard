import styled from 'styled-components'

export const FiltersWrapper = styled.button`
  display: flex;

  &:focus {
    outline: none;
  }
`

export const FiltersIcon = styled.img`
  ${(props) =>
    props.rotate &&
    `transform: rotate(
        ${props.rotate}
        );`}
`

export const FiltersContainer = styled.div`
  position: relative;
`

export const Filter = styled.p`
  padding: 0 0.5rem;
  color: #4b5563;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
`

export const OptionsWrapper = styled.div`
  position: absolute;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  background: #ffffff;
  width: 200px;
  right: 0;
  overflow: hidden;
  top: 30px;
  display: flex;
  flex-direction: column;
  z-index: 100;
`

export const Option = styled.button`
  font-size: 14px;
  line-height: 14px;
  color: #1f2937;
  padding: 0.5rem 1rem;
  flex: 1;
  text-align: left;
  ${(props) => props.active && `background: #F4F5F7;`};
  &:focus {
    outline: none;
  }
`
