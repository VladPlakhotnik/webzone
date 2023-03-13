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
          <NavLink to='/products'>
            <Link>Products</Link>
          </NavLink>
          <NavLink to='/docs'>
            <Link>Docs</Link>
          </NavLink>
          <NavLink to='/pricing'>
            <Link>Pricing</Link>
          </NavLink>
          <NavLink to='/cv'>
            <Link>CV Generator</Link>
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
