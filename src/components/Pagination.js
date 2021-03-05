import svg from '../assets/svg'
import {
  PageBlock,
  PaginationIcon,
  PaginationWrapper,
} from '../styled/components/Pagination'

function Pagination() {
  return (
    <PaginationWrapper>
      <PageBlock>
        <PaginationIcon src={svg.arrowLeft} />
      </PageBlock>
      <PageBlock>2</PageBlock>
      <PageBlock>3</PageBlock>
      <PageBlock>4</PageBlock>
      <PageBlock>5</PageBlock>
      <PageBlock last>
        <PaginationIcon src={svg.arrowRight} />
      </PageBlock>
    </PaginationWrapper>
  )
}

export default Pagination
