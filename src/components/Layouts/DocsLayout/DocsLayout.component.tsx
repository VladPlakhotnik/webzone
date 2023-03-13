import { Outlet } from 'react-router-dom'
import { LayoutContainer } from './DocsLayout.styles'
import { DocsNavigation } from '../../DocsNavigation'
import { Header } from '../../Header'
import { Footer } from '../../Footer'
import { Flexbox } from '../../../common/components/Flexbox'

export const DocsLayout: React.FC = () => {
  return (
    <Flexbox direction='column' align='center'>
      <Header />
      <LayoutContainer>
        <DocsNavigation />
        <Outlet />
      </LayoutContainer>
      <Footer />
    </Flexbox>
  )
}
