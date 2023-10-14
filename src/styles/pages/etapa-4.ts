import styled from 'styled-components'
import { s } from 'theme'

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
