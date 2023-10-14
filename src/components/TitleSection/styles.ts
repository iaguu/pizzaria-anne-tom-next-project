import styled from 'styled-components'
import { s } from 'theme'

export const TitleSection = styled.h1`
  width: fit-content;
  margin: 4rem auto 2.3rem auto;
  text-align: center;
  font-weight: 800;
  color: ${s.primary};
  font-size: ${s.textTitleMain};
  animation: ${s.zoom} 0.4s ease-in-out, ${s.fadeIn} 0.2s linear;

  &:after {
    content: '';
    display: block;
    height: 0.5rem;
    width: 30%;
    background-color: ${s.secondary};
    margin: 2rem auto 0 auto;
    border-radius: 1rem;
  }
`
