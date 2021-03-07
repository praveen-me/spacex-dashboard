import PropTypes from 'prop-types'
import { useState } from 'react'
import LaunchStatus from '../../components/LaunchStatus'
import { LaunchData, TableRow } from '../../styled/modules/Dashboard'
import { getDate, getLaunchStatus } from '../../utils/helpers'
import LaunchDetails from '../LaunchDetails'

function Launch(props) {
  const [showDetails, setShowDetails] = useState(false)

  const {
    flight_number,
    date_utc,
    launchpad,
    success,
    payloads,
    name,
    rocket,
  } = props

  function toggleShowDetails() {
    setShowDetails(!showDetails)
  }

  return (
    <>
      <TableRow onClick={toggleShowDetails} showCursor>
        <LaunchData sizeNo={1}>{flight_number}</LaunchData>
        <LaunchData sizeNo={2}>{getDate(date_utc)}</LaunchData>
        <LaunchData sizeNo={3}>{launchpad.name}</LaunchData>
        <LaunchData sizeNo={4}>{name}</LaunchData>
        <LaunchData sizeNo={5}>{payloads[0]?.orbit || null}</LaunchData>
        <LaunchData sizeNo={6}>
          <LaunchStatus type={getLaunchStatus(success)} />
        </LaunchData>
        <LaunchData sizeNo={7}>{rocket.name}</LaunchData>
      </TableRow>
      {showDetails && (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <LaunchDetails onDismiss={toggleShowDetails} {...props} />
      )}
    </>
  )
}

Launch.propTypes = {
  flight_number: PropTypes.number,
  date_utc: PropTypes.string,
  launchpad: PropTypes.oneOfType([PropTypes.object]),
  success: PropTypes.bool,
  payloads: PropTypes.oneOfType([PropTypes.object, undefined, null]),
  name: PropTypes.string,
  rocket: PropTypes.oneOfType([PropTypes.object]),
}

export default Launch
