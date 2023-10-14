import styled, { css } from 'styled-components'

export const Wrapper = styled.div<{
  minHeight?: number
}>`
  ${({ minHeight }) =>
    css`
      min-height: ${minHeight ? minHeight + 'rem' : 'min-content'};
    `}
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: flex-start;
  justify-content: center;
`
