import { useSelector } from 'react-redux'
import svg from '../assets/svg'
import { getIsLoading } from '../store/selectors/loading'
import { LoaderImage, LoaderWrapper } from '../styled/components/Loader'

function Loader() {
  const isLoading = useSelector(getIsLoading)

  if (!isLoading) return null

  return (
    <LoaderWrapper>
      <LoaderImage src={svg.loader} alt="loader" />
    </LoaderWrapper>
  )
}

export default Loader
