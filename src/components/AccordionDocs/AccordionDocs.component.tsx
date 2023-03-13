import { AccordionSummary } from '@mui/material'
import { AccordionTypes } from './AccordionDocs.types'
import { ArrowDown, Accordion, AccordionDetails } from './AccordionDocs.styles'

export const AccordionDocs: React.FC<AccordionTypes> = ({ accordion }) => {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDown src='/assets/img/svg/arrow_down.svg' />}
        >
          {accordion.question}
        </AccordionSummary>
        <AccordionDetails>{accordion.answer}</AccordionDetails>
      </Accordion>
    </div>
  )
}
