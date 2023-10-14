import styled from 'styled-components'
import { s } from 'theme'
import { ArrowRepeat } from '@styled-icons/bootstrap'

export const LoadCep = styled(ArrowRepeat)`
  width: 4rem;
  height: 100%;
  position: absolute;
  z-index: 100;
  right: 0;
  color: ${s.lightGrey};
  margin-right: 1rem;
  animation: ${s.rotate} 0.8s linear infinite;
`

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 2rem;
`

export const WrapperInput = styled.div<{ error: string | undefined }>`
  display: flex;
  flex-direction: column;
  position: relative;

  label {
    color: ${({ error }) => (error !== undefined ? s.error : s.lightGrey)};
    position: absolute;
    font-size: ${s.textLabel};
    margin: 1.4rem 1.4rem 1.3rem 1.5rem;
    border-radius: 0.4rem;
    background-color: ${s.bgDefault};
    cursor: unset;
    z-index: 0;
    transition: all 0.2s linear;
    animation: ${s.zoom} 0.4s ease-in-out;
  }

  input {
    appearance: none;
    -moz-appearance: textfield;
    -webkit-appearance: textfield;
    border-radius: 1rem;
    box-shadow: inset -0.3rem -0.3rem 0.9rem 0 ${s.light},
      inset 0.3rem 0.3rem 0.9rem 0 ${s.boxShadowDark};
    border: 0.15rem solid
      ${({ error }) => (error !== undefined ? s.error : 'transparent')};
    outline: none;
    padding: 1.3rem 1.4rem;
    background-color: ${s.bgDefault};
    font-size: ${s.textInput};
    z-index: 1;
    color: ${({ error }) => (error !== undefined ? s.error : s.darkGrey)};
    transition: all 0.2s ease-in-out;

    &::placeholder {
      font-size: ${s.textInput};
      color: ${({ error }) => (error !== undefined ? s.error : s.lightGrey)};
    }

    &:hover {
      border: 0.15rem solid
        ${({ error }) => (error !== undefined ? s.error : s.light)};
    }

    &:focus {
      border: 0.15rem solid
        ${({ error }) => (error !== undefined ? s.error : s.secondary)};
    }

    &:required:invalid + label:before {
      content: '*';
    }

    &:focus + label,
    &:not(:placeholder-shown) + label {
      font-size: ${s.textFloatLabel};
      color: ${({ error }) => (error !== undefined ? s.error : s.darkGrey)};
      margin-top: -1.9rem;
      margin-left: 0;
      cursor: default;
      z-index: 2;
    }

    &:-webkit-autofill:focus + label,
    &:-webkit-autofill:not(:placeholder-shown) + label {
      font-size: ${s.textFloatLabel};
      color: ${({ error }) => (error !== undefined ? s.error : s.darkGrey)};
      margin-top: -1.9rem;
      margin-left: 0;
      cursor: default;
      z-index: 2;
    }

    &:disabled {
      background-color: ${s.disabled};
      box-shadow: none;
      cursor: not-allowed;
      border-color: transparent;

      &:hover {
        border-color: transparent;
      }
    }
  }
`

export const MsgError = styled.small<{ error: string | undefined }>`
  display: flex;
  color: ${s.error};
  justify-content: flex-end;
  font-size: ${s.textError};
  height: 1.3rem;
  visibility: ${({ error }) => (error !== undefined ? 'visible' : 'hidden')};
`
