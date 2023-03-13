import styled from 'styled-components'
import { Accordion as AccordionStyle } from '@mui/material'
import { AccordionDetails as AccordionDetailsStyle } from '@mui/material'

export const ContainerContent = styled.div`
  width: 80%;
  display: flex;
  height: 1000px;
`
export const Accordion = styled(AccordionStyle)`
  margin-bottom: 3rem;
  background-color: inherit;
  color: #fff;
`
export const AccordionDetails = styled(AccordionDetailsStyle)`
  margin-bottom: 3rem;
`
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
