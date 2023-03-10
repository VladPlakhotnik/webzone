import { NavLink } from 'react-router-dom'
import { Player } from '@lottiefiles/react-lottie-player'
import { Container, Link } from './ErrorPage.styles'
import { Flexbox } from '../../common/components/Flexbox'

export const ErrorPage: React.FC = () => {
  return (
    <Flexbox direction='column' align='center'>
      <Container>
        <Player autoplay speed={0.4} loop src='/assets/json/402.json' />
      </Container>
      <div>
        Come back to{' '}
        <NavLink to='/'>
          <Link>Home Page</Link>
        </NavLink>
      </div>
    </Flexbox>
  )
}
