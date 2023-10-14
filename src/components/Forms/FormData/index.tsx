import { useRef, useContext, useState, useEffect, useCallback } from 'react'
import * as S from 'components/Forms/FormData/styles'
import * as C from 'components'
import { FormHandles, Scope, SubmitHandler } from '@unform/core'
import * as Yup from 'yup'
import { useRouter } from 'next/router'
import { DataContext } from 'hooks/UseContext'
import { useValidate } from 'hooks/UseValidate'
import { toast } from 'react-toastify'
import axios from 'axios'
import { writeToken } from 'utils/HandleToken'
import { getStorage, setStorage } from 'utils/HandleSessionStorage'

interface FormDataUnform {
  name?: string
  phone?: string
  email?: string
  address?: {
    street: string
    number: string
    neighborhood: string
    city: string
    state: string
    zipCode: string
  }
}

const statesOptions = [
  { value: 'AC', label: 'AC' },
  { value: 'AL', label: 'AL' },
  { value: 'AP', label: 'AP' },
  { value: 'AM', label: 'AM' },
  { value: 'BA', label: 'BA' },
  { value: 'CE', label: 'CE' },
  { value: 'DF', label: 'DF' },
  { value: 'ES', label: 'ES' },
  { value: 'GO', label: 'GO' },
  { value: 'MA', label: 'MA' },
  { value: 'MT', label: 'MT' },
  { value: 'MS', label: 'MS' },
  { value: 'MG', label: 'MG' },
  { value: 'PA', label: 'PA' },
  { value: 'PB', label: 'PB' },
  { value: 'PR', label: 'PR' },
  { value: 'PE', label: 'PE' },
  { value: 'PI', label: 'PI' },
  { value: 'RJ', label: 'RJ' },
  { value: 'RN', label: 'RN' },
  { value: 'RS', label: 'RS' },
  { value: 'RO', label: 'RO' },
  { value: 'RR', label: 'RR' },
  { value: 'SC', label: 'SC' },
  { value: 'SP', label: 'SP' },
  { value: 'SE', label: 'SE' },
  { value: 'TO', label: 'TO' }
]

export const FormData = () => {
  const { setFormData } = useContext(DataContext)
  const formRef = useRef<FormHandles>(null)
  const schema = useValidate()
  const router = useRouter()

  const [selectState, setSelectState] = useState('')

  const [loadZipCode, setLoadZipCode] = useState(false)
  const [disabledField, setDisabledField] = useState(true)

  const SearchCep = useCallback(async (params: string, server = 0) => {
    setLoadZipCode(true)

    // Lista de servidores
    const servers = [
      `https://brasilapi.com.br/api/cep/v1/${params}`,
      `https://viacep.com.br/ws/${params}/json`,
      `https://ws.apicep.com/cep/${params}.json`
    ]

    axios
      .get(servers[server])
      .then(({ data }) => {
        const state = data.state || data.uf

        if (!state) {
          C.NotifyError('CEP inválido ou não encontrado.', 'Erro!')
        }

        formRef.current?.setFieldValue(
          'address.street',
          data.street || data.address || data.logradouro
        )
        formRef.current?.setFieldValue(
          'address.neighborhood',
          data.neighborhood || data.district || data.bairro
        )
        formRef.current?.setFieldValue(
          'address.city',
          data.city || data.localidade
        )
        setSelectState(data.state || data.uf)
      })
      .catch(() => {
        if (servers[server + 1]) {
          SearchCep(params, server + 1)
        } else {
          C.NotifyError('CEP inválido ou não encontrado.', 'Erro!')
        }
      })
      .finally(() => {
        setLoadZipCode(false)
        setDisabledField(false)
      })
  }, [])

  useEffect(() => {
    if (getStorage('form')) {
      formRef.current?.setFieldValue('name', getStorage('form').name)
      formRef.current?.setFieldValue('email', getStorage('form').email)
      formRef.current?.setFieldValue('phone', getStorage('form').phone)
      formRef.current?.setFieldValue(
        'address.zipCode',
        getStorage('form').address.zipCode
      )
      SearchCep(getStorage('form').address.zipCode).then(r => r)
      formRef.current?.setFieldValue(
        'address.street',
        getStorage('form').address.street
      )
      formRef.current?.setFieldValue(
        'address.number',
        getStorage('form').address.number
      )
      formRef.current?.setFieldValue(
        'address.neighborhood',
        getStorage('form').address.neighborhood
      )
      formRef.current?.setFieldValue(
        'address.city',
        getStorage('form').address.city
      )
      setSelectState(getStorage('form').address.state)
    }
  }, [SearchCep])

  // gera cookies de acesso para a página de sucesso
  const WriteToken = () => {
    writeToken('tokenPageSuccess', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9')
  }

  const handleSubmit: SubmitHandler<FormDataUnform> = async data => {
    try {
      formRef.current?.setErrors({})

      await schema.validate(data, { abortEarly: false })

      setFormData(data)
      setStorage('form', data)

      // limpa fila de toasts
      toast.clearWaitingQueue()
      // remove toast ativo
      toast.dismiss()
      // mostra toast de sucesso
      C.NotifySuccess('Seus dados foram enviados com sucesso.', 'Sucesso!')

      WriteToken()

      await router.push('/sucesso')
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {}

        err.inner.forEach(({ message, path }) => {
          // @ts-ignore
          errorMessages[path] = message
        })

        formRef.current?.setErrors(errorMessages)

        // mostra toast de erro
        C.NotifyError(
          'Corrija o preenchimento dos campos em destaque.',
          'Erro!'
        )
      }
    }
  }

  return (
    <>
      <C.Toast />
      <S.TitleComponent>Dados do Cliente</S.TitleComponent>
      <S.Container>
        <S.Card>
          <S.FormFields ref={formRef} onSubmit={handleSubmit}>
            <S.ContentForm>
              <C.Input
                name="name"
                id="name"
                label="Nome Completo"
                type="text"
                placeholder="Nome Completo"
                autoFocus
                mask=""
              />

              <C.Input
                name="email"
                id="email"
                label="E-mail"
                type="email"
                placeholder="E-mail"
                mask=""
              />

              <C.Input
                name="phone"
                id="phone"
                label="(DDD) + Celular"
                type="text"
                placeholder="(DDD) + Celular"
                mask="(99) 99999-9999"
              />

              <Scope path="address">
                <C.Input
                  name="zipCode"
                  id="zipCode"
                  label="CEP"
                  type="text"
                  placeholder="CEP"
                  mask="99999-999"
                  onKeyPress={SearchCep}
                  load={loadZipCode}
                />

                <C.Input
                  name="street"
                  id="street"
                  label="Rua"
                  type="text"
                  placeholder="Rua"
                  mask=""
                  load={loadZipCode}
                  disabled={disabledField}
                />

                <C.Input
                  name="number"
                  id="number"
                  label="Número"
                  type="text"
                  placeholder="Número"
                  mask="9999999999"
                />

                <C.Input
                  name="neighborhood"
                  id="neighborhood"
                  label="Bairro"
                  type="text"
                  placeholder="Bairro"
                  mask=""
                  load={loadZipCode}
                  disabled={disabledField}
                />

                <C.Input
                  name="city"
                  id="city"
                  label="Cidade"
                  type="text"
                  placeholder="Cidade"
                  mask=""
                  load={loadZipCode}
                  disabled={disabledField}
                />

                <C.Select
                  name="state"
                  id="state"
                  label="Estado"
                  type="text"
                  placeholder="Estado"
                  mask=""
                  options={statesOptions}
                  setStateInSelect={selectState}
                  disabledField={disabledField}
                />
              </Scope>
            </S.ContentForm>
            <S.BtnSend type="submit" disabled={disabledField}>
              Enviar
            </S.BtnSend>
          </S.FormFields>
        </S.Card>
      </S.Container>
    </>
  )
}
