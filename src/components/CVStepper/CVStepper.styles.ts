import styled from 'styled-components'
import TextField from '@mui/material/TextField'
import {
  Box as BoxMui,
  Stepper as StepperMui,
  Step as StepMui,
  StepLabel as StepLabelMui,
} from '@mui/material'

export const CVStepperContainer = styled.div`
  width: 100%;
  margin-top: 7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  & .MuiTextField-root {
    color: #fff;
  }
`
export const Span = styled.span`
  color: #fff;
  font-family: 'Poppins';
  font-size: 1.5rem;
`
export const P = styled.p`
  color: #8c8c8c;
`
export const Button = styled.button`
  font-family: inherit;
  color: #000;
  background-color: #fff;
  border-radius: 0.5rem;
  padding: 0.7rem 1.5rem;
  border: none;
  margin-left: 1.5rem;
  &:hover {
    cursor: pointer;
  }
`
export const StepLabel = styled(StepLabelMui)`
  color: #fff;
`
export const Step = styled(StepMui)`
  color: #fff;
`
export const Stepper = styled(StepperMui)`
  color: #fff;
`
export const Box = styled(BoxMui)`
  color: #fff;
`
export const Icon = styled.img`
  width: 1rem;
`
export const Input = styled(TextField)`
  color: #fff;
  font-family: 'Poppins';
  width: 100%;
  margin: 30px;
`
