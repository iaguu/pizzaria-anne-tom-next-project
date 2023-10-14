import { useEffect, useRef, useState } from 'react'
import * as S from 'components/Forms/Input/styles'
import { useField } from '@unform/core'
import ReactInputMask, { Props as InputProps } from 'react-input-mask'

interface Props extends InputProps {
  name: string
  id: string
  placeholder: string
  label: string
  type: string
  autoFocus?: boolean
  onKeyPress?: any
  load?: boolean
}

export const Input = ({
  name,
  id,
  placeholder,
  mask,
  onKeyPress,
  load,
  ...rest
}: Props) => {
  const inputRef = useRef(null)
  const { fieldName, registerField, error, clearError } = useField(name)

  const [updateZipCode, setUpdateZipCode] = useState('')

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })

    if (name === 'zipCode' && updateZipCode.length === 8) {
      onKeyPress(updateZipCode)
    }
  }, [updateZipCode, fieldName, registerField, name, onKeyPress])

  const clearField = () => {
    if (error !== undefined) clearError()
  }

  const captureZipCode = (e: any) => {
    setUpdateZipCode(e.target.value.replace('-', ''))
  }

  return (
    <>
      <S.ContainerInput>
        <S.WrapperInput error={error}>
          {name === 'zipCode' && load && <S.LoadCep />}
          <ReactInputMask
            autoComplete="new-password"
            name={name}
            id={id}
            placeholder={placeholder}
            {...rest}
            ref={inputRef}
            onInput={clearField}
            mask={mask}
            maskPlaceholder={null}
            onKeyUp={captureZipCode}
          />
          <label htmlFor={id}>{placeholder}</label>
        </S.WrapperInput>
        <S.MsgError error={error}>{error && error}</S.MsgError>
      </S.ContainerInput>
    </>
  )
}
