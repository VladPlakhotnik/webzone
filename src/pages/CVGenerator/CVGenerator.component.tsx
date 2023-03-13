import { CVGeneratorContainer } from './CVGenerator.styles'
import { CVStepper } from '../../components/CVStepper'

export const CVGenerator: React.FC = () => {
  return (
    <CVGeneratorContainer>
      <h1>Let&apos;s generate your Resume!</h1>
      <p>Please provide accurate and clear description wherever necessary</p>
      <CVStepper />
    </CVGeneratorContainer>
  )
}
