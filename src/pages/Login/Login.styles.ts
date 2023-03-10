import styled from 'styled-components'
import TextField from '@mui/material/TextField'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`
export const ContainerImg = styled.div`
  width: 50%;
  background-image: url(/assets/img/jpg/backgroundLogin.jpg);
  background-repeat: no-repeat;
  background-color: #000;
  background-position: center;
  background-size: cover;
`
export const ContainerLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  color: #000;
  width: 50%;

  & .MuiTextField-root {
    margin-bottom: 3rem;
  }
`
export const Arrow = styled.img`
  width: 3rem;
  padding: 3rem;
`
export const Google = styled.img`
  width: 3rem;
  padding: 1rem;
  fill: #d12c2c;
  &:hover {
    cursor: pointer;
    stroke: #d12c2c;
    fill: #d12c2c;
  }
`
export const GitHub = styled.img`
  width: 3rem;
  padding: 1rem;
  fill: #d12c2c;
  &:hover {
    cursor: pointer;
    color: #d12c2c;
  }
`
export const Input = styled(TextField)`
  font-family: 'Poppins';
  width: 100%;
  margin: 30px;
`
export const ButtonLogin = styled.button`
  font-family: inherit;
  background-color: #303030;
  color: #fff;
  border-radius: 0.3rem;
  border: none;
  width: 30%;
  padding: 0.7rem;
  &:hover {
    cursor: pointer;
    background-color: #000;
  }
`
export const CreateAccount = styled.div`
  padding: 0.4rem;
  font-weight: 500;
  color: #000;
  &:hover {
    box-shadow: inset 0 0 0 1px #fff;
  }
`
