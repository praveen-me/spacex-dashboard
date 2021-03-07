import { useDispatch, useSelector } from 'react-redux'
import svg from '../assets/svg'
import { getLaunchesRequested } from '../store/actions/launches'
import { getPageStatus } from '../store/selectors/dashboard'
import {
  PageBlock,
  PaginationIcon,
  PaginationWrapper,
} from '../styled/components/Pagination'

function Pagination() {
  const { allPages, currentPage } = useSelector(getPageStatus)
  const dispatch = useDispatch()

  if (!(allPages.length > 1)) return null

  function onPrevPageClick() {
    if (currentPage > 1) {
      dispatch(
        getLaunchesRequested({
          page: currentPage - 1,
        })
      )
    }
  }

  function onNextPageClick() {
    if (currentPage < allPages.length) {
      dispatch(
        getLaunchesRequested({
          page: currentPage + 1,
        })
      )
    }
  }

  return (
    <div style={{ textAlign: 'right' }}>
      <PaginationWrapper>
        <PageBlock onClick={onPrevPageClick}>
          <PaginationIcon src={svg.arrowLeft} />
        </PageBlock>
        {allPages.map((page) => (
          <PageBlock
            key={page}
            currentPage={page === currentPage}
            onClick={() => {
              dispatch(
                getLaunchesRequested({
                  page,
                })
              )
            }}
          >
            {page}
          </PageBlock>
        ))}
        <PageBlock last onClick={onNextPageClick}>
          <PaginationIcon src={svg.arrowRight} />
        </PageBlock>
      </PaginationWrapper>
    </div>
  )
}

export default Pagination
