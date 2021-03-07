import { useSelector } from 'react-redux'
import { getAllLaunches } from '../../store/selectors/dashboard'
import { LaunchesWrapper } from '../../styled/modules/Dashboard'
import Launch from './Launch'

function Launches() {
  const launchesData = useSelector(getAllLaunches)

  return (
    <LaunchesWrapper>
      {launchesData &&
        launchesData.map((launch) => (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <Launch {...launch} key={launch.flight_number} />
        ))}
    </LaunchesWrapper>
  )
}

export default Launches
