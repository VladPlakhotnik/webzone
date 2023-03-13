import {
  ContainerWelcome,
  Container,
  ContainerInfo,
} from './DocsWelcome.styles'
import { Flexbox } from '../../common/components/Flexbox'

export const DocsWelcome: React.FC = () => {
  return (
    <ContainerWelcome>
      <h1 style={{ marginBottom: '3rem' }}>Welcome to Documentation</h1>
      <Flexbox>
        <Container>Quick Start</Container>
        <Container>API Reference</Container>
      </Flexbox>
      <ContainerInfo>
        <h2>What is this site? </h2>
        <p>We are rewriting the React documentation with a few differences:</p>
        <ul>
          <li>All explanations are written using Hooks rather than classes.</li>
          <li>We have added interactive examples and visual diagrams.</li>
          <li>
            Guides include challenges (with solutions!) to check your
            understanding.
          </li>
        </ul>
        <p>This beta website contains the current draft of the new docs.</p>
        <h2>How much content is ready? </h2>
        <ul>
          <li>Learn React: ~99% finished.</li>
          <li>API Reference: 100% finished.</li>
        </ul>
        <p>You can track our progress on GitHub.</p>
        <h2>How can I provide feedback? </h2>
        <p>
          Please use this GitHub issue or this anonymous form for high-level
          feedback. If you spot something that doesnt make sense, please tell
          us! Additionally, each page has thumbs up/down buttons in the corner.
        </p>
        <h2>Will this site replace the main site? </h2>
        <p>
          We aim to switch this site to be the main one once we reach content
          parity with the existing React documentation. The old React website
          will be archived at a subdomain so you will still be able to access
          it. Old content links will redirect to the archived subdomain, which
          will have a notice about outdated content.
        </p>
      </ContainerInfo>
    </ContainerWelcome>
  )
}
