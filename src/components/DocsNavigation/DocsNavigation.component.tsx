import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import {
  Container,
  ContainerNavigation,
  ContainerTopic,
  Topic,
  ContainerGetStart,
  ArrowRight,
  ArrowUp,
} from './DocsNavigation.styles'
import { NavigationDataType } from './DocsNavigation.types'

export const DocsNavigation: React.FC = () => {
  useEffect(() => {
    fetch('/data.json')
      .then(req => req.json())
      .then((json: NavigationDataType[]) => setNavigationData(json))
  }, [])

  const [navigationData, setNavigationData] = useState<NavigationDataType[]>([])
  const [toggle, setToggle] = useState<number | null>(null)
  const accordionToggle = (idx: number): void =>
    toggle === idx ? setToggle(null) : setToggle(idx)

  return (
    <Container>
      <ContainerNavigation>
        <ContainerTopic>
          <ContainerGetStart>Get Started</ContainerGetStart>
        </ContainerTopic>
        <div>
          {navigationData.map((obj, idx) => (
            <div>
              <ContainerTopic onClick={() => accordionToggle(idx)}>
                <Topic>{obj.subject.toUpperCase()}</Topic>
                {idx === toggle ? (
                  <ArrowUp src='/assets/img/svg/arrow_up.svg' />
                ) : (
                  <ArrowRight src='/assets/img/svg/arrow_right.svg' />
                )}
              </ContainerTopic>
              <div>
                <div>
                  {idx === toggle &&
                    obj.themes.map(thema => (
                      <NavLink to={`${obj.subject}/${thema.slug}`}>
                        <p>- {thema.topic}</p>
                      </NavLink>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </ContainerNavigation>
    </Container>
  )
}
