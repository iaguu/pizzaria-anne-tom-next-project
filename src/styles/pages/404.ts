import styled from 'styled-components'
import { s } from 'theme'

export const ContainImg = styled.div`
  display: flex;
  justify-content: center;

  img {
    max-width: 100%;
    height: auto;
  }
`

export const Paragraph = styled.p`
  font-size: ${s.textTitleParagraph};
  width: 100%;
  margin: 0 auto 2rem auto;
  padding-bottom: 1rem;
  text-align: center;
  max-width: 80rem;
`

export const NavLink = styled.a`
  width: min-content;
  height: min-content;
  margin: 1.5rem auto 3rem auto;
`

export const BtnHome = styled.button`
  font-size: ${s.textBtn};
  text-transform: uppercase;
  background-color: ${s.secondary};
  padding: 1.7rem 4rem;
  font-weight: 800;
  border-radius: 1rem;
  white-space: nowrap;
  transition: background-color 0.2s linear;

  &:hover {
    background-color: ${s.secondaryHover};
  }
`
