import {
  Screen,
  Container,
  ContainerImg,
  ContainerText,
  H1,
  Button,
  ContainerGetStarted,
  P,
  Player,
} from './FirstScreen.styles'

export const FirstScreen: React.FC = () => {
  return (
    <Screen>
      <Container>
        <ContainerText>
          <H1>
            Get an <u>offer</u> from the first interview
          </H1>
          <ContainerGetStarted>
            <Button>Get Started</Button>
            <P>
              You must complete our beginner-friendly initiation challenge in
              order to sign up.
            </P>
          </ContainerGetStarted>
        </ContainerText>
        <ContainerImg>
          <img src='assets/img/svg/interview.svg' />
        </ContainerImg>
      </Container>
      <Player autoplay speed={0.8} loop src='assets/json/arrow_down.json' />
    </Screen>
  )
}
