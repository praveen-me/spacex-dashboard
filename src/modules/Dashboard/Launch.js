import LaunchStatus from '../../components/LaunchStatus'
import { LaunchData, LaunchWrapper } from '../../styled/modules/Launch'

function Launch() {
  return (
    <LaunchWrapper>
      <LaunchData sizeNo={1}>Launch</LaunchData>
      <LaunchData sizeNo={2}>Launch</LaunchData>
      <LaunchData sizeNo={3}>Launch</LaunchData>
      <LaunchData sizeNo={4}>
        <LaunchStatus type="success" />
      </LaunchData>
      <LaunchData sizeNo={5}>Launch</LaunchData>
      <LaunchData sizeNo={6}>Launch</LaunchData>
      <LaunchData sizeNo={7}>Launch</LaunchData>
    </LaunchWrapper>
  )
}

export default Launch
