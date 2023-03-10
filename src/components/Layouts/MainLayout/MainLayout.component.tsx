import { Outlet } from 'react-router-dom'
import { Header } from '../../Header'
import { Footer } from '../../Footer'
import { LayoutContainer } from './MainLayout.styles'
import { Flexbox } from '../../../common/components/Flexbox'

export const MainLayout: React.FC = () => {
  return (
    <Flexbox direction='column' align='center'>
      <Header />
      <LayoutContainer>
        <Outlet />
      </LayoutContainer>
      <Footer />
    </Flexbox>
  )
}
