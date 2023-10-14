import styled from 'styled-components'
import { s } from 'theme'
import { X, ChevronDown } from '@styled-icons/bootstrap'

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
      margin-top: -1.8rem;
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

export const ContainerOptions = styled.div<{ show: boolean }>`
  display: ${({ show }) => (show ? 'flex' : 'none')};
  flex-direction: column;
  overflow-y: auto;
  max-height: 24rem;
  box-shadow: 0.3rem 0.4rem 2rem 0 #d7d7e7;
  background-color: ${s.bgDefault};
  border-radius: 1rem;
  padding: 1rem 0;
  cursor: pointer;
  margin-top: 0.1rem;
  position: absolute;
  width: 100%;
  top: 5rem;
  transform: translate3d(0, -5rem, 0);
  opacity: 0;
  animation: ${s.moveIn('0', '0', '0')} 0.2s ease-in-out forwards,
    ${s.fadeIn} 0.2s ease-in-out forwards;
`

export const Option = styled.div<{ highlight: boolean }>`
  padding: 0.5rem 2rem;
  ${({ highlight }) => highlight && `background-color: ${s.light};`}

  &:hover {
    background-color: ${s.light};
  }
`

export const NotFound = styled.div<{ show: boolean }>`
  padding: 0.5rem 2rem;
  text-align: center;
  ${({ show }) => !show && 'display: none;'}
`

export const MsgError = styled.small<{ error: string | undefined }>`
  display: flex;
  color: ${s.error};
  justify-content: flex-end;
  font-size: ${s.textError};
  height: 1.3rem;
  visibility: ${({ error }) => (error !== undefined ? 'visible' : 'hidden')};
`

export const InputHidden = styled.input`
  display: none;
`

export const ContainerICons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: row;
  flex-wrap: nowrap;
  position: absolute;
  z-index: 1;
  height: 100%;
  width: 6.01rem;
  right: 1rem;
  top: 0;
`

export const IconClose = styled(X)<{ showIcon: boolean }>`
  ${({ showIcon }) => !showIcon && 'display: none;'}
  width: 3rem;
  height: 2.5rem;
  color: ${s.lightGrey};
  cursor: pointer;
`

export const IconArrowDown = styled(ChevronDown)`
  width: 3rem;
  height: 2rem;
  color: ${s.lightGrey};
  cursor: pointer;
  border-left: 0.1rem solid #ddd;
`
