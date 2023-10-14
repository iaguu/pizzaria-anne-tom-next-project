import styled from 'styled-components'
import { s } from 'theme'

export const TitleComponent = styled.h1`
  color: ${s.primary};
  font-weight: 800;
  font-size: ${s.textTitleSection};
  margin-bottom: 2rem;
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

export const ContainerMain = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 3rem;
  flex-wrap: wrap;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border-radius: 1rem;
  margin-bottom: 2rem;
  box-shadow: -0.6rem -0.6rem 1.6rem 0 ${s.light},
    0.6rem 0.6rem 1.6rem 0 ${s.boxShadowDark};
  width: 100%;
  border: 0.2rem solid ${s.bgDefault};
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

  ${s.break(75)} {
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
  text-align: center;
`

export const ContentInfo = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.h3`
  display: flex;
  flex-direction: row;
  font-weight: 800;
  color: ${s.primary};
  font-size: ${s.textTitleCard};
  text-transform: uppercase;
  margin: 0.7rem 0;
  justify-content: center;
`

export const SubTitle = styled.h4`
  font-size: ${s.textSubtitleCard};
  font-weight: 500;
  margin-bottom: 0.9rem;
  margin-top: 0;
`

export const ContainerAdditional = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const Box = styled.div`
  display: flex;
  border: 0.2rem solid ${s.secondary};
  border-radius: 1rem;
  padding: 1.5rem;
  flex-direction: column;
  width: 100%;
`

export const BoxImg = styled.div`
  display: flex;
  overflow: hidden;
  border-radius: 1rem;
  width: 100%;
  height: 18rem;
  position: relative;

  span {
    width: 100%;
    height: 18rem;
  }

  img {
    width: 100% !important;
    height: 100% !important;
    position: relative !important;
    object-fit: cover;
  }
`

export const AddItem = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  margin-top: 1.2rem;
}

input[type='number']::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

input[type='number'] {
  width: 100%;
  max-width: 5rem;
  -moz-appearance: textfield;
  appearance: none;
  -webkit-appearance: textfield;
  background-color: ${s.light};
  border: 0.2rem solid ${s.dark};
  cursor: default;
  border-radius: 0.5rem;
  font-size: ${s.textBtnCount};
  font-weight: 600;
  text-align: center;
  margin: 0 1rem;
  color: ${s.darkGrey};
`

export const BtnCount = styled.button`
  display: block;
  align-items: center;
  justify-content: center;
  background-color: ${s.secondary};
  font-weight: 800;
  font-size: ${s.textBtnCount};
  padding: 0;
  border-radius: 0.6rem;
  min-width: 4rem;
  transition: background-color 0.2s linear;

  &:hover {
    background-color: ${s.secondaryHover};

    &:disabled {
      background-color: ${s.secondary};
    }
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`
