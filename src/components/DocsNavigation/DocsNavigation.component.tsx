import { useState } from 'react'
import {
  Container,
  ContainerNavigation,
  ContainerTopic,
  ContainerIcon,
  ContainerGetStart,
  ArrowRight,
  ArrowUp,
  Html,
  Css,
  Javascript,
  Api,
  React,
} from './DocsNavigation.styles'

export const DocsNavigation: React.FC = () => {
  const [topics, setTopics] = useState([
    {
      topic: 'HTML',
      toggle: false,
      icon: <Html src='/assets/img/svg/html.svg' />,
    },
    {
      topic: 'CSS',
      toggle: false,
      icon: <Css src='/assets/img/svg/css.svg' />,
    },
    {
      topic: 'JAVASCRIPT',
      toggle: false,
      icon: <Javascript src='/assets/img/svg/js.svg' />,
    },
    {
      topic: 'API',
      toggle: false,
      icon: <Api src='/assets/img/svg/api.svg' />,
    },
    {
      topic: 'REACT',
      toggle: false,
      icon: <React src='/assets/img/svg/react.svg' />,
    },
  ])

  const accordionToggle = (idx: number): void => {
    setTopics(prev =>
      [...prev].map((obj, indx) =>
        idx === indx
          ? { ...obj, toggle: !obj.toggle }
          : { ...obj, toggle: false },
      ),
    )
  }

  return (
    <Container>
      <ContainerNavigation>
        <ContainerTopic>
          <ContainerGetStart>Get Started</ContainerGetStart>
        </ContainerTopic>
        <div>
          {topics.map((object, idx) => (
            <div>
              <ContainerTopic onClick={() => accordionToggle(idx)}>
                <ContainerIcon>{object.icon}</ContainerIcon>
                <span>{object.topic}</span>
                <div>
                  {object.toggle ? (
                    <ArrowUp src='/assets/img/svg/arrow_up.svg' />
                  ) : (
                    <ArrowRight src='/assets/img/svg/arrow_right.svg' />
                  )}
                </div>
              </ContainerTopic>
              <div>
                {object.toggle && (
                  <div>
                    <p>Questions 1</p>
                    <p>Questions 2</p>
                    <p>Questions 3</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </ContainerNavigation>
    </Container>
  )
}
