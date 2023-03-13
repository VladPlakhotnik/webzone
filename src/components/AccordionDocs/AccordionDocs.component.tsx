import { AccordionSummary } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { AccordionTypes } from './AccordionDocs.types'
import {
  ContainerAccordion,
  ArrowDown,
  Accordion,
  AccordionDetails,
  ContainerAnswer,
  Lock,
} from './AccordionDocs.styles'

export const AccordionDocs: React.FC<AccordionTypes> = ({ accordion }) => {
  return (
    <ContainerAccordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDown src='/assets/img/svg/arrow_down.svg' />}
        >
          {accordion.question}
        </AccordionSummary>
        <AccordionDetails>
          {accordion.answer ? (
            accordion.answer
          ) : (
            <NavLink to='/pricing'>
              <ContainerAnswer>
                <Lock src='/assets/img/svg/lock.svg' />
                <p>
                  Answers to questions will be available after{' '}
                  <u>subscription</u>
                </p>
              </ContainerAnswer>
            </NavLink>
          )}
        </AccordionDetails>
      </Accordion>
    </ContainerAccordion>
  )
}
