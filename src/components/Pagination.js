import { useSelector } from 'react-redux'
import svg from '../assets/svg'
import { getPageStatus } from '../store/selectors/dashboard'
import {
  PageBlock,
  PaginationIcon,
  PaginationWrapper,
} from '../styled/components/Pagination'

function Pagination() {
  const { allPages, currentPage } = useSelector(getPageStatus)

  if (!(allPages.length > 1)) return null

  return (
    <div style={{ textAlign: 'right' }}>
      <PaginationWrapper>
        <PageBlock>
          <PaginationIcon src={svg.arrowLeft} />
        </PageBlock>
        {allPages.map((page) => (
          <PageBlock key={page} currentPage={page === currentPage}>
            {page}
          </PageBlock>
        ))}
        <PageBlock last>
          <PaginationIcon src={svg.arrowRight} />
        </PageBlock>
      </PaginationWrapper>
    </div>
  )
}

export default Pagination
