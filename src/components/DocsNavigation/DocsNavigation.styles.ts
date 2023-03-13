import styled from 'styled-components'

export const Container = styled.div`
  width: 20%;
`
export const ContainerNavigation = styled.div`
  position: fixed;
  width: 270px;
`
export const ContainerTopic = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  display: flex;
  padding: 1rem 0;
  &:hover {
    cursor: pointer;
    border-radius: 0 1rem 1rem 0;
    background-color: #343a46;
  }
`
export const Topic = styled.span`
  width: 70%;
`
export const ContainerGetStart = styled.div`
  width: 70%;
  text-align: center;
  font-weight: 400;
  border-bottom: 1px solid #fff;
`
export const ContainerIcon = styled.div`
  margin: 0 1rem;
`
export const ArrowRight = styled.img`
  width: 1rem;
`
export const ArrowUp = styled.img`
  width: 1rem;
`
