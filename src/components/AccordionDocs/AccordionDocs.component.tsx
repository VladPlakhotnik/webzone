import { useState } from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import { AccordionTypes } from './AccordionDocs.types'
import { ContainerContent, ArrowDown } from './AccordionDocs.styles'

export const AccordionDocs: React.FC<AccordionTypes> = ({
  toggle,
  topic,
  accordion,
}) => {
  const [expanded, setExpanded] = useState<string | false>(false)

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false)
    }

  return (
    <ContainerContent>
      <div>{`${topic} - ${toggle}`}</div>
      <div>
        <Accordion
          expanded={expanded === 'panel1'}
          onChange={handleChange('panel1')}
        >
          <AccordionSummary
            expandIcon={<ArrowDown src='/assets/img/svg/arrow_down.svg' />}
          >
            {accordion.question}
          </AccordionSummary>
          <AccordionDetails>{accordion.answer}</AccordionDetails>
        </Accordion>
      </div>
    </ContainerContent>
  )
}
