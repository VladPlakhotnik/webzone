import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ContainerContent, Container, H1 } from './DocsContent.styles'
import { AccordionDocs } from '../AccordionDocs'
import { ContentDataType, ThemesTypes } from './DocsContent.types'

export const DocsContent: React.FC = () => {
  const [contentData, setContentData] = useState<ContentDataType[]>([])
  const [topicValue, setTopicValue] = useState<ThemesTypes>()
  const { subjectId, topicId } = useParams()

  useEffect(() => {
    fetch('/data.json')
      .then(req => req.json())
      .then((json: ContentDataType[]) => setContentData(json))
  }, [])

  useEffect(() => {
    const subject = contentData.find(obj => obj.subject === subjectId)
    const theme = subject?.themes.find(topic => topic.slug === topicId)

    setTopicValue(theme)
  }, [contentData, subjectId, topicId])

  return (
    <ContainerContent>
      <Container>
        <div>
          <H1>{topicValue?.topic}</H1>
          {topicValue?.['question-answer'].map(qa => (
            <AccordionDocs accordion={qa} />
          ))}
        </div>
      </Container>
    </ContainerContent>
  )
}
