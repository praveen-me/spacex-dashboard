import { useSelector } from 'react-redux'
import { getAllLaunches } from '../../store/selectors/dashboard'
import { getIsLoading } from '../../store/selectors/loading'
import { LaunchesWrapper, ListEmptyPara } from '../../styled/modules/Dashboard'
import Launch from './Launch'

function Launches() {
  const launchesData = useSelector(getAllLaunches)
  const isLoading = useSelector(getIsLoading)

  if (isLoading) return null

  return (
    <LaunchesWrapper>
      {!launchesData.length > 0 ? (
        <ListEmptyPara>
          No results found for the specified filter.
        </ListEmptyPara>
      ) : (
        launchesData.map((launch) => (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <Launch {...launch} key={launch.flight_number} />
        ))
      )}
    </LaunchesWrapper>
  )
}

export default Launches
