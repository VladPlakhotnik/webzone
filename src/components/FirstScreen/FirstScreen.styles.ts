import styled from 'styled-components'
import { Player as PlayerLottie } from '@lottiefiles/react-lottie-player'

export const Screen = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`
export const Container = styled.div`
  width: 100%;
  height: 900px;
  display: flex;
  align-items: center;
`
export const ContainerImg = styled.div`
  width: 100%;
`
export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 40%;
`
export const H1 = styled.h1`
  font-size: 4rem;
`
export const ContainerGetStarted = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Button = styled.button`
  display: inline;
  font-family: 'Poppins';
  font-size: 1.4rem;
  padding: 1.2rem 2.5rem 1.1rem;
  background-color: #ff4d4d;
  color: #fff;
  border: 1px solid #ff4d4d;
  border-radius: 1rem;
  text-align: center;
  font-weight: 400;
  &:hover {
    cursor: pointer;
    border: 1px solid #fff;
  }
`
export const P = styled.p`
  width: 60%;
  opacity: 0.6;
`
export const Player = styled(PlayerLottie)`
  width: 10%;
`
