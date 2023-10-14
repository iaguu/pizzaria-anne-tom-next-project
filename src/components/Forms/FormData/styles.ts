import styled from 'styled-components'
import { s } from 'theme'
import { Form } from '@unform/web'

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

export const Container = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 3rem 2rem;
  border-radius: 1rem;
  margin-bottom: 2rem;
  width: 100%;
  box-shadow: -0.6rem -0.6rem 1.6rem 0 ${s.light},
    0.6rem 0.6rem 1.6rem 0 ${s.boxShadowDark};
`

export const FormFields = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const ContentForm = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-flow: dense;
  column-gap: 2rem;
  width: 100%;

  div {
    grid-column: span 12;
  }

  input {
    animation: ${s.zoom} 0.4s ease-in-out;
  }

  p {
    margin-top: 0;
  }

  ${s.break(60)} {
    div {
      grid-column: span 6;
    }
  }

  ${s.break(100)} {
    div {
      grid-column: span 4;
    }
  }
`

export const BtnSend = styled.button`
  font-size: ${s.textBtn};
  text-transform: uppercase;
  background-color: ${s.secondary};
  width: 100%;
  max-width: 37rem;
  padding: 1.5rem 7rem;
  margin: 1.6rem auto 0 auto;
  font-weight: 800;
  border-radius: 1rem;
  transition: background-color 0.2s linear;
  animation: ${s.zoom} 0.4s ease-in-out;

  ${s.break(90)} {
    max-width: calc(30% + 2rem);
  }

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
