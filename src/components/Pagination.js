/* eslint-disable no-restricted-globals */
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import svg from '../assets/svg'

import { getPageStatus } from '../store/selectors/dashboard'
import { getIsLoading } from '../store/selectors/loading'
import {
  PageBlock,
  PaginationIcon,
  PaginationWrapper,
} from '../styled/components/Pagination'
import useQuery from '../utils/hooks/useQuery'

const threshold = 5
function Pagination() {
  const { allPages, currentPage } = useSelector(getPageStatus)
  const isLoading = useSelector(getIsLoading)

  const query = useQuery()
  const history = useHistory()

  if (!(allPages.length > 1)) return null

  function handlePagination(page) {
    const pageNo = query.get('page')
    if (!pageNo) {
      history.push(
        location.search ? `${location.search}&page=${page}` : `/?page=${page}`
      )
    } else {
      const n = location.search.replace(/page=[0-9]*/g, `page=${page}`)
      history.push(`/${n}`)
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

  function renderButton(page) {
    if (!page) return null

    return (
      <PageBlock
        disabled={isLoading}
        key={page}
        currentPage={page === currentPage}
        onClick={() => {
          // eslint-disable-next-line no-restricted-globals
          if (isNaN(Number(page))) return

          handlePagination(page)
        }}
      >
        {page === 'initial' || page === 'end' ? '...' : page}
      </PageBlock>
    )
  }

  return (
    <div style={{ textAlign: 'right' }}>
      <PaginationWrapper>
        <PageBlock onClick={onPrevPageClick}>
          <PaginationIcon src={svg.arrowLeft} />
        </PageBlock>
        {allPages.map((page, index) => {
          if (threshold <= currentPage && index === 1) {
            return renderButton('initial')
          }

          if (currentPage === 1 && index + 1 < 4) {
            return renderButton(page)
          }

          if (currentPage !== 1 && index + 1 === 1) {
            return renderButton(page)
          }
          if (
            currentPage !== 1 &&
            index + 1 >= currentPage - 2 &&
            index + 1 <= currentPage + 2
          ) {
            return renderButton(page)
          }

          if (index === allPages.length - 2) {
            return renderButton('end')
          }

          if (index === allPages.length - 1) {
            return renderButton(page)
          }

          return renderButton(null)
        })}
        <PageBlock last onClick={onNextPageClick}>
          <PaginationIcon src={svg.arrowRight} />
        </PageBlock>
      </PaginationWrapper>
    </div>
  )
}

export default Pagination
