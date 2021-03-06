import styled from 'styled-components'

export const DetailsOverlay = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
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

export const DetailsModal = styled.div`
  width: 550px;
  padding: 2rem;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  background: #ffffff;
  position: relative;
`

export const LaunchInfo = styled.div`
  display: flex;
`

export const LaunchImage = styled.img`
  height: 72px;
  width: 72px;
`

export const LaunchDetailsWrapper = styled.div`
  margin-left: 1.5rem;
`

export const LaunchInfoStrip = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
`

export const LaunchTitle = styled.p`
  color: #1f2937;
  font-weight: 500;
  font-size: 18px;
  line-height: 18px;
  margin-right: 1rem;
`

export const LaunchMission = styled.p`
  font-size: 12px;
  line-height: 12px;
  color: #374151;
  margin-bottom: 12px;
`

export const LaunchInfoLinks = styled.div``

export const LaunchInfoLink = styled.img`
  margin-right: 8px;
`

export const LaunchDescription = styled.p`
  color: #1f2937;
  font-size: 14px;
  line-height: 24px;
  margin: 1rem 0;
`

export const DetailStripWrapper = styled.div`
  ${(props) => !props.noBorder && 'border-bottom: 1px solid #e4e4e7;'}
  padding: 1rem 0;
  display: flex;
`

export const DetailTitle = styled.p`
  color: #4b5563;
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  width: 164px;
`
export const DetailValue = styled.p`
  color: #1f2937;
  font-size: 14px;
  line-height: 14px;
`

export const CloseModal = styled.button`
  position: absolute;
  top: 32px;
  right: 32px;
  z-index: 1000000;
  font-size: 0;
  padding: 5px;
`

export const CloseIcon = styled.img``
