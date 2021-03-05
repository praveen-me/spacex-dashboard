import svg from '../assets/svg'
import { LoaderImage, LoaderWrapper } from '../styled/components/Loader'

function Loader() {
  return (
    <LoaderWrapper>
      <LoaderImage src={svg.loader} alt="loader" />
    </LoaderWrapper>
  )
}

export default Loader
