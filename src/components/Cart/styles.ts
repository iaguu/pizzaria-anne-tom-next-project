import styled from 'styled-components'
import { s } from 'theme'

export const ContainerCart = styled.div`
  margin-left: auto;
  color: ${s.dark};
  margin-bottom: 0.2rem;
  display: flex;
  transform: translate3d(-200%, 0, 0);
  animation: ${s.moveIn('0', '0', '0')} 0.4s ease-in-out forwards,
    ${s.fadeIn} 0.2s linear;

  & > div {
    display: flex !important;
    align-items: center;
  }

  img {
    transform: translateY(0.3rem);
  }
`

export const Cart = styled.h1`
  text-align: right;
  font-size: ${s.textCart};
  font-weight: 600;
  color: ${s.primary};
  border: 0.2rem solid ${s.secondary};
  border-radius: 1rem;
  padding: 1rem;
  width: fit-content;
  margin: 0 0 1.6rem 1rem;

  b {
    color: ${s.dark};
    font-weight: 600;
    margin-left: 0.5rem;
  }
`
