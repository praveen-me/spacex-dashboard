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
} from '../../styled/modules/LauchDetails'
import DetailStrip from './DetailStrip'

function LaunchDetails() {
  return (
    <DetailsOverlay>
      <DetailsModal>
        <CloseModal>
          <CloseIcon src={svg.close} />
        </CloseModal>
        <LaunchInfo>
          <LaunchImage src="https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png" />
          <LaunchDetailsWrapper>
            <LaunchInfoStrip>
              <LaunchTitle>CRS -1</LaunchTitle>
              <LaunchStatus type="success" />
            </LaunchInfoStrip>
            <LaunchMission>Falcon 9</LaunchMission>
            <LaunchInfoLinks>
              <LaunchInfoLink src={svg.nasa} />
              <LaunchInfoLink src={svg.wikipedia} />
              <LaunchInfoLink src={svg.youtube} />
            </LaunchInfoLinks>
          </LaunchDetailsWrapper>
        </LaunchInfo>
        <LaunchDescription>
          CRS-1 successful, but the secondary payload was inserted into
          abnormally low orbit and lost due to Falcon 9 boost stage engine
          failure, ISS visiting vehicle safety rules, and the primary payload
          owner contractual right to decline a second ignition of the second
          stage under some condition. Wikipedia
        </LaunchDescription>
        <DetailStrip title="Flight Number" value="9" />
        <DetailStrip title="Flight Number" value="9" />
        <DetailStrip title="Flight Number" value="9" />
        <DetailStrip title="Flight Number" value="9" />
        <DetailStrip title="Flight Number" value="9" />
        <DetailStrip title="Flight Number" value="9" />
        <DetailStrip title="Flight Number" value="9" />
        <DetailStrip title="Flight Number" value="9" />
        <DetailStrip title="Flight Number" value="9" noBorder />
      </DetailsModal>
    </DetailsOverlay>
  )
}

export default LaunchDetails
