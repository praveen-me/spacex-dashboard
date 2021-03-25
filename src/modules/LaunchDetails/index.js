import PropTypes from 'prop-types'
import { useRef } from 'react'
import svg from '../../assets/svg'
import LaunchStatus from '../../components/LaunchStatus'
import {
  DetailsModal,
  DetailsOverlay,
  LaunchImage,
  LaunchInfo,
  LaunchDetailsWrapper,
  LaunchInfoStrip,
  LaunchTitle,
  LaunchMission,
  LaunchInfoLinks,
  LaunchInfoLink,
  LaunchDescription,
  CloseModal,
  CloseIcon,
  InfoLinkWrapper,
  LaunchDescriptionWrapper,
  WikipediaLink,
} from '../../styled/modules/LauchDetails'
import { getDate, getLaunchStatus } from '../../utils/helpers'
import DetailStrip from './DetailStrip'

function LaunchDetails(props) {
  const wrapperRef = useRef(null)

  const {
    onDismiss,
    flight_number,
    date_utc,
    launchpad,
    success,
    payloads,
    name,
    rocket,
    details,
    links,
  } = props

  function handleOnClick(event) {
    if (event.target !== wrapperRef.current) return

    onDismiss()
  }

  const launchImgUrl = links?.patch?.small

  const wikiPediaLink = links?.wikipedia
  const nasaLink = links?.presskit
  const webcastLink = links?.webcast

  const dataRows = [
    {
      label: 'Flight Number',
      value: flight_number,
    },
    {
      label: 'Mission Name',
      value: name,
    },
    {
      label: 'Rocket Engine Type',
      value: rocket?.engines?.type,
    },
    {
      label: 'Rocket Name',
      value: rocket?.name,
    },
    {
      label: 'Manufacturer',
      value: rocket?.company,
    },
    {
      label: 'Nationality',
      value: rocket?.country,
    },
    {
      label: 'Launch Date',
      value: getDate(date_utc),
    },
    {
      label: 'Payload Type',
      value: payloads[0]?.name,
    },
    {
      label: 'Orbit',
      value: payloads[0]?.orbit,
    },
    {
      label: 'Launch Site',
      value: launchpad.name,
    },
  ]

  return (
    <DetailsOverlay ref={wrapperRef} onClick={handleOnClick}>
      <DetailsModal>
        <CloseModal onClick={onDismiss}>
          <CloseIcon src={svg.close} />
        </CloseModal>
        <LaunchInfo>
          {launchImgUrl && <LaunchImage src={launchImgUrl} />}

          <LaunchDetailsWrapper>
            <LaunchInfoStrip>
              <LaunchTitle>{name}</LaunchTitle>
              <LaunchStatus type={getLaunchStatus(success)} />
            </LaunchInfoStrip>
            <LaunchMission>{rocket.name}</LaunchMission>
            <LaunchInfoLinks>
              {nasaLink && (
                <InfoLinkWrapper target="_blank" href={nasaLink}>
                  <LaunchInfoLink src={svg.nasa} />
                </InfoLinkWrapper>
              )}
              {wikiPediaLink && (
                <InfoLinkWrapper target="_blank" href={wikiPediaLink}>
                  <LaunchInfoLink src={svg.wikipedia} />
                </InfoLinkWrapper>
              )}
              {webcastLink && (
                <InfoLinkWrapper target="_blank" href={webcastLink}>
                  <LaunchInfoLink src={svg.youtube} />
                </InfoLinkWrapper>
              )}
            </LaunchInfoLinks>
          </LaunchDetailsWrapper>
        </LaunchInfo>
        {details && (
          <LaunchDescriptionWrapper>
            <LaunchDescription>{details}</LaunchDescription>
            <InfoLinkWrapper target="_blank" href={wikiPediaLink}>
              <WikipediaLink>Wikipedia</WikipediaLink>
            </InfoLinkWrapper>
          </LaunchDescriptionWrapper>
        )}

        {dataRows.map((row, index) =>
          row.value ? (
            <DetailStrip
              title={row.label}
              value={row.value}
              noBorder={index === dataRows.length - 1}
            />
          ) : (
            <></>
          )
        )}
      </DetailsModal>
    </DetailsOverlay>
  )
}

LaunchDetails.propTypes = {
  onDismiss: PropTypes.func,
  flight_number: PropTypes.number,
  date_utc: PropTypes.string,
  launchpad: PropTypes.oneOfType([PropTypes.object]),
  success: PropTypes.bool,
  payloads: PropTypes.oneOfType([PropTypes.object]),
  name: PropTypes.string,
  rocket: PropTypes.oneOfType([PropTypes.object]),
  details: PropTypes.string,
  links: PropTypes.oneOfType([PropTypes.object]),
}

export default LaunchDetails
