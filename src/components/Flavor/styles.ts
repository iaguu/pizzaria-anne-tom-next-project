import styled, { css } from 'styled-components'
import { s } from 'theme'

export const TitleComponent = styled.h1`
  color: ${s.primary};
  font-weight: 800;
  font-size: ${s.textTitleSection};
  margin-bottom: 1.6rem;
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

export const ContainerCard = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 3rem;
`

export const Card = styled.label<{ verifyCheck: boolean }>`
  display: flex;
  flex-direction: row;
  padding: 1.5rem;
  border-radius: 1rem;
  margin-bottom: 2rem;
  box-shadow: -0.6rem -0.6rem 1.6rem 0 ${s.light},
    0.6rem 0.6rem 1.6rem 0 ${s.boxShadowDark};
  width: 100%;
  cursor: pointer;
  border: 0.2rem solid
    ${({ verifyCheck }) => (verifyCheck ? s.secondary : s.bgDefault)};
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
    border: 0.2rem solid ${s.secondary};
  }

  ${s.break(54)} {
    padding: 1.6rem 2rem;
  }

  ${s.break(70)} {
    width: calc(50% - 1rem);
  }

  ${s.break(130)} {
    width: calc(50% - 2rem);
    margin-bottom: 3rem;
  }
`

export const ContainerImg = styled.div`
  overflow: hidden;
  border-radius: 1rem;
  width: 9rem;
  min-width: 9rem;
  height: 9rem;
  position: relative;

  span {
    position: relative !important;
    width: 9rem;
    min-width: 9rem;
    height: 9rem;
  }

  img {
    width: 100% !important;
    height: 100% !important;
    position: relative !important;
    object-fit: cover;
  }
`

export const ContainerInfo = styled.div<{ bonus: boolean }>`
  display: flex;
  flex-direction: column;
  margin-left: 1.2rem;
  width: 100%;
  justify-content: start;

  ${({ bonus }) =>
    bonus &&
    css`
      border: 0.2rem solid ${s.primary};
      border-radius: 0.8rem;
      padding: 0.1rem 0.5rem 0.5rem 0.5rem;
    `};

  em {
    display: none;
    color: ${s.primary};
    font-size: ${s.textSmallCard};
    ${({ bonus }) =>
      bonus &&
      css`
        display: flex;
      `};
  }

  ${s.break(54)} {
    font-size: ${s.textSmallCard};
  }
`

export const ContentInfo = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.h2`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  font-weight: 800;
  color: ${s.primary};
  font-size: ${s.textSmallTitle};
  text-transform: uppercase;
  margin: 0;
  align-items: baseline;

  b {
    margin-right: 0.7rem;
  }

  ${s.break(54)} {
    font-size: ${s.textSubtitleCard};
  }
`

export const SubTitle = styled.h3`
  color: ${s.dark};
  font-size: ${s.textSmallCard};
  font-weight: 600;
  margin: 0;

  ${s.break(54)} {
    font-size: ${s.textCard};
  }
`

export const Text = styled.p`
  font-size: ${s.textSmallP};
  margin: 0;
  line-height: 1.2;

  ${s.break(54)} {
    font-size: ${s.textSmallTitle};
    line-height: 1.5;
  }
`

export const ContainerCheckbox = styled.div<{ verifyCheck: boolean }>`
  display: flex;
  height: fit-content;
  margin: auto 0.5rem auto -1rem;

  input {
    width: 1.8rem;
    height: 1.8rem;
    cursor: pointer;
    display: none;
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
  justify-content: space-between;
  margin: 2rem 0 3rem 0;
`

export const Space = styled.div`
  width: 100%;
  max-width: 2rem;
`
