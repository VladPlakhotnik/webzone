import { useParams } from 'react-router-dom'
import { ContainerContent } from './DocsContent.styles'
import { AccordionDocs } from '../AccordionDocs'

export const DocsContent: React.FC = () => {
  const { id } = useParams()

  return (
    <ContainerContent>
      <h1>{id}</h1>
      <AccordionDocs
        toggle={false}
        topic='Html'
        accordion={{ question: '1', answer: '2' }}
      />
    </ContainerContent>
  )
}
