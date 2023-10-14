import styled from 'styled-components'
import { s } from 'theme'

export const TitleComponent = styled.h1`
  color: ${s.primary};
  font-weight: 800;
  font-size: ${s.textTitleSection};
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

export const ContainerSize = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
`

export const Card = styled.label<{ verifyCheck: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border-radius: 1rem;
  margin-bottom: 2.5rem;
  box-shadow: -0.6rem -0.6rem 1.6rem 0 ${s.light},
    0.6rem 0.6rem 1.6rem 0 ${s.boxShadowDark};
  width: 100%;
  cursor: pointer;
  border: 0.2rem solid
    ${({ verifyCheck }) => (verifyCheck ? s.primary : s.bgDefault)};
  transition: border-color 0.2s linear;
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

  &:hover {
    border: 0.2rem solid ${s.primary};
  }

  ${s.break(35)} {
    width: calc(50% - 1rem);
  }

  ${s.break(87)} {
    width: calc(25% - 2rem);
  }

  ${s.break(130)} {
    width: calc(25% - 3rem);
  }
`

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: start;
`

export const ContentInfo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`

export const Title = styled.h3`
  display: flex;
  flex-direction: row;
  font-weight: 800;
  color: ${s.primary};
  font-size: ${s.textTitleCard};
  text-transform: uppercase;
  margin: 1rem 0 0 0;
  justify-content: center;
  text-align: center;
`

export const SubTitle = styled.h4`
  font-size: ${s.textSmallSubtitle};
  font-weight: 500;
  margin-bottom: -0.5rem;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    margin-right: 1rem;
  }
`

export const ContainerRadio = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 100%;
`

export const RadioContent = styled.div`
  display: flex;
  flex-direction: column;
  border: 0.2rem solid ${s.secondary};
  border-radius: 1rem;
  padding: 1.5rem 2rem;
  width: 100%;
`

export const RadioLabel = styled.div<{ verifyCheck: boolean }>`
  margin: -0.5rem auto 0 auto;

  input {
    width: 1.8rem;
    height: 1.8rem;
    cursor: pointer;
    display: none;
  }

  img {
    object-fit: contain;
  }

  & img:nth-child(1) {
    ${({ verifyCheck }) => verifyCheck && 'display: none;'}
  }

  & img:nth-child(2) {
    ${({ verifyCheck }) => !verifyCheck && 'display: none;'}
  }
`

export const WrapperBtn = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100%;
  justify-content: space-around;
  margin: 2rem 0 3rem 0;
`

export const Space = styled.div`
  width: 100%;
  max-width: 2rem;
  display: flex;
`
