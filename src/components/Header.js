import { HeaderContainer, HeaderLogo } from '../styled/components/Header'
import svg from '../assets/svg'

function Header() {
  return (
    <HeaderContainer>
      <HeaderLogo src={svg.logo} alt="SpaceX" />
    </HeaderContainer>
  )
}

export default Header
