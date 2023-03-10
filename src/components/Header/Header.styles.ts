import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  left: 0%;
  top: 0%;
  right: 0%;
  bottom: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 4.5rem;
  padding-right: 3.5rem;
  padding-left: 3.5rem;
  box-shadow: 0 1px 0 0 hsl(0deg 0% 100% / 10%);
  background-color: rgba(22, 23, 27, 0.8);
  background-image: url(https://uploads-ssl.webflow.com/62e3ee10882dc50bcae8d07a/631a5d4631d4c55a475f3e34_noise-50.png);
  background-position: 0px 0px;
  background-size: 200px 200px;
  backdrop-filter: blur(40px);
  z-index: 999;
`
export const ContainerFirst = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
`
export const ContainerSecond = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 20%;
`
export const BlockLinkes = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 40%;
`
export const Link = styled.a`
  color: #fff;
  opacity: 0.6;
  &:hover {
    transition: 0.5s;
    opacity: 1;
  }
`
export const BlockButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 40%;
`
export const Login = styled.div`
  padding: 0.6rem 1.2rem;
  border: 0.1rem solid #fff;
  border-radius: 0.5rem;
  &:hover {
    box-shadow: inset 0 0 0 1px #fff;
    transition: 0.2s;
  }
`
export const Join = styled.div`
  padding: 0.6rem 1.2rem;
  border: 0.1rem solid #ff4d4d;
  border-radius: 0.5rem;
  &:hover {
    box-shadow: inset 0 0 0 1px #ff4d4d;
    transition: 0.2s;
  }
`
export const Logo = styled.img`
  width: 30%;
`
