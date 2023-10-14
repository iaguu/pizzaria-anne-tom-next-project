import styled from 'styled-components'
import { Whatsapp } from '@styled-icons/bootstrap'
import { s } from 'theme'

export const Zap = styled(Whatsapp)`
  width: 3rem;
  height: 3rem;
  margin-bottom: 0.3rem;
  margin-left: 0.5rem;
`

export const TitleComponent = styled.h1`
  color: ${s.primary};
  font-weight: 800;
  font-size: ${s.textTitleCard};
  margin-bottom: 3rem;
  width: fit-content;
  animation: ${s.zoom} 0.4s ease-in-out, ${s.fadeIn} 0.2s linear;

  &:after {
    content: '';
    display: block;
    height: 0.5rem;
    width: 30%;
    background-color: ${s.secondary};
    margin-top: 0.5rem;
    border-radius: 1rem;
  }
`

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 3rem;
  border-radius: 1rem;
  margin-bottom: 2rem;
  width: 100%;
  box-shadow: -0.6rem -0.6rem 1.6rem 0 ${s.light},
    0.6rem 0.6rem 1.6rem 0 ${s.boxShadowDark};
`

export const CardContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const ContainerSuccess = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const ContainerList = styled.div`
  display: flex;
  flex-direction: column;
  border: 0.2rem solid ${s.secondary};
  border-radius: 1rem;
  padding: 1rem;
  width: 100%;
  margin-bottom: 2rem;
  opacity: 0;

  &:nth-child(1) {
    animation: ${s.zoom} 0.4s ease-in-out, ${s.fadeIn} 0.1s linear forwards;
    animation-delay: 100ms;
  }

  &:nth-child(2) {
    animation: ${s.zoom} 0.4s ease-in-out, ${s.fadeIn} 0.1s linear forwards;
    animation-delay: 300ms;
  }

  &:nth-child(3) {
    animation: ${s.zoom} 0.4s ease-in-out, ${s.fadeIn} 0.1s linear forwards;
    animation-delay: 500ms;
  }

  &:nth-child(4) {
    animation: ${s.zoom} 0.4s ease-in-out, ${s.fadeIn} 0.1s linear forwards;
    animation-delay: 700ms;
  }

  p,
  li {
    word-break: break-word;
  }

  ${s.break(37)} {
    width: calc(50% - 1.5rem);
  }

  ${s.break(65)} {
    width: calc(25% - 1.5rem);
  }
`

export const BtnSend = styled.button`
  font-size: ${s.textBtn};
  text-transform: uppercase;
  background-color: ${s.secondary};
  padding: 1rem 3rem;
  margin: 1.5rem auto 0 auto;
  font-weight: 800;
  border-radius: 1rem;
  transition: background-color 0.2s linear;
  animation: ${s.zoom} 0.6s ease-in-out, ${s.fadeIn} 0.2s linear;

  &:hover {
    background-color: ${s.secondaryHover};
  }
`

export const Title = styled.h1`
  font-weight: 800;
  color: ${s.primary};
  font-size: ${s.textSubtitleCard};
  margin-bottom: 0.3rem;
`

export const WrapperBtn = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: flex-start;
  margin: 2rem 0 3rem 0;

  ${s.break(25)} {
    flex-wrap: nowrap;
    justify-content: space-between;
  }
`
