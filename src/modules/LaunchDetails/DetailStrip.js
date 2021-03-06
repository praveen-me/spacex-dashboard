import PropTypes from 'prop-types'

import {
  DetailTitle,
  DetailValue,
  DetailStripWrapper,
} from '../../styled/modules/LauchDetails'

function DetailStrip(props) {
  const { title, value, noBorder } = props

  return (
    <DetailStripWrapper noBorder={noBorder}>
      <DetailTitle>{title}</DetailTitle>
      <DetailValue>{value}</DetailValue>
    </DetailStripWrapper>
  )
}

DetailStrip.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
  noBorder: PropTypes.bool,
}

export default DetailStrip
