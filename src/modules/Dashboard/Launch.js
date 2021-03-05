import LaunchStatus from '../../components/LaunchStatus'
import { LaunchData, LaunchWrapper } from '../../styled/modules/Launch'

function Launch() {
  return (
    <LaunchWrapper>
      <LaunchData>Launch</LaunchData>
      <LaunchData>Launch</LaunchData>
      <LaunchData>Launch</LaunchData>
      <LaunchData>Launch</LaunchData>
      <LaunchData>
        <LaunchStatus type="success" />
      </LaunchData>
    </LaunchWrapper>
  )
}

export default Launch
