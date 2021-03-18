import { useDispatch, useSelector } from 'react-redux'
import svg from '../assets/svg'
import {
  getLaunchesByCustomDates,
  getLaunchesRequested,
} from '../store/actions/launches'
import {
  getPageStatus,
  isLaunchesByCustomDates,
} from '../store/selectors/dashboard'
import { getIsLoading } from '../store/selectors/loading'
import {
  PageBlock,
  PaginationIcon,
  PaginationWrapper,
} from '../styled/components/Pagination'
import useQuery from '../utils/hooks/useQuery'

function Pagination() {
  const { allPages, currentPage } = useSelector(getPageStatus)
  const isLoading = useSelector(getIsLoading)
  const isLauchesByCustomDates = useSelector(isLaunchesByCustomDates)
  const dispatch = useDispatch()
  const query = useQuery()

  if (!(allPages.length > 1)) return null

  function handlePagination(page) {
    if (isLauchesByCustomDates) {
      const start = query.get('start')
      const end = query.get('end')
      const filter = query.get('filter')
      dispatch(
        getLaunchesByCustomDates({ filter, start, end, replace: false, page })
      )
    } else {
      dispatch(
        getLaunchesRequested({
          page,
        })
      )
    }
  }

  function onPrevPageClick() {
    if (currentPage > 1) {
      handlePagination(currentPage - 1)
    }
  }

  function onNextPageClick() {
    if (currentPage < allPages.length) {
      handlePagination(currentPage + 1)
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
            disabled={isLoading}
            key={page}
            currentPage={page === currentPage}
            onClick={() => {
              handlePagination(page)
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
