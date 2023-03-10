import { Outlet } from 'react-router-dom'
import { LayoutContainer } from './DocsLayout.styles'
import { DocsNavigation } from '../../DocsNavigation'

export const DocsLayout: React.FC = () => {
  return (
    <LayoutContainer>
      <DocsNavigation />
      <Outlet />
    </LayoutContainer>
  )
}
