import styled, { css } from 'styled-components'
import { Check2 } from '@styled-icons/bootstrap'
import { c, s } from 'theme'

export const Checked = styled(Check2)`
  color: ${s.darkGrey};
  width: 2.7rem;
  height: 2.7rem;
`

export const ContainerSteps = styled(c.Container)`
  width: 100%;
  flex-direction: column;
  margin-top: 2rem;
`

export const ContainerLine = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 1.1rem;
  justify-content: center;
  margin-top: 2.1rem;
  margin-bottom: -2.1rem;
`

export const LineStep = styled.div<{ actived: boolean }>`
  flex: 1;
  height: 0.4rem;
  background-color: ${({ actived }) => (actived ? s.primary : s.boxShadowDark)};
  animation: ${s.zoom} 0.3s ease-in;
`

export const ContainerRounded = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 0.6rem;
`

export const Step = styled.span<{ actived: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${s.textStep};
  font-weight: 800;
  z-index: 10;
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  background-color: ${props => (props.actived ? s.secondary : s.boxShadowDark)};
  cursor: ${props => (props.actived ? 'pointer' : 'not-allowed')};
  ${props =>
    props.actived &&
    css`
      transition: transform, background-color, 0.3s linear;

      &:hover {
        transform: scale(1.1);
        background-color: ${s.secondaryHover};
      }
    `}
  animation: ${s.zoom} 0.3s ease-in;
`
