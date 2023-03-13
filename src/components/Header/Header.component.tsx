import { NavLink } from 'react-router-dom'
import {
  Container,
  ContainerFirst,
  ContainerSecond,
  BlockLinkes,
  Link,
  BlockButtons,
  Login,
  Join,
  Logo,
} from './Header.styles'

export const Header: React.FC = () => {
  return (
    <Container>
      <ContainerFirst>
        <NavLink to='/'>
          <Logo src='/assets/img/jpg/logo.png' alt='WebZone' />
        </NavLink>
        <BlockLinkes>
          <NavLink to='/careers'>
            <Link>Products</Link>
          </NavLink>
          <NavLink to='/docs'>
            <Link>Docs</Link>
          </NavLink>
          <NavLink to='/support'>
            <Link>Pricing</Link>
          </NavLink>
          <NavLink to='/careers'>
            <Link>Careers</Link>
          </NavLink>
          <NavLink to='/bloge'>
            <Link>Blog</Link>
          </NavLink>
        </BlockLinkes>
      </ContainerFirst>

      <ContainerSecond>
        <BlockButtons>
          <NavLink to='/login'>
            <Login>Log in</Login>
          </NavLink>
          <NavLink to='/join'>
            <Join>Join</Join>
          </NavLink>
        </BlockButtons>
      </ContainerSecond>
    </Container>
  )
}
