import styled from 'styled-components'
import {
  Accordion as AccordionStyle,
  AccordionDetails as AccordionDetailsStyle,
} from '@mui/material'

export const ContainerAccordion = styled.div`
  margin-bottom: 5rem;
`
export const Accordion = styled(AccordionStyle)`
  background-color: inherit;
  color: #fff;
`
export const AccordionDetails = styled(AccordionDetailsStyle)``
export const ArrowDown = styled.img`
  fill: #000;
  stroke: #000;
  width: 1rem;
  margin-right: 1rem;
`
export const ArrowUp = styled.img`
  width: 1rem;
  margin-right: 1rem;
`
export const ContainerAnswer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;
`
export const Lock = styled.img`
  width: 4rem;
`
