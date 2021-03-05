import PropTypes from 'prop-types'

import { StatusText, StatusWrapper } from '../styled/components/LaunchStatus'

function LaunchStatus(props) {
  const { type = '' } = props

  return (
    <StatusWrapper type={type}>
      <StatusText type={type}>Success</StatusText>
    </StatusWrapper>
  )
}

LaunchStatus.propTypes = {
  type: PropTypes.string,
}

export default LaunchStatus
