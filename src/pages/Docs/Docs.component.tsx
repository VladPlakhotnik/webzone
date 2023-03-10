import { DocsNavigation } from '../../components/DocsNavigation'
import { DocsContainer } from './Docs.styles'
import { DocsContent } from '../../components/DocsContent'

export const Docs: React.FC = () => {
  return (
    <DocsContainer>
      <DocsNavigation />
      <DocsContent />
    </DocsContainer>
  )
}
