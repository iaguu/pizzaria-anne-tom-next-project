import { useContext, useEffect } from 'react'
import * as S from 'styles/pages/success'
import { DataContext } from 'hooks/UseContext'
import { c } from 'theme'
import { useCart } from 'hooks/UseCart'
import { readToken, removeAllTokens } from 'utils/HandleToken'
import { getStorage } from 'utils/HandleSessionStorage'
import * as C from 'components'

const Sucesso = () => {
  const {
    additionals,
    setAdditionals,
    cart,
    setCart,
    formData: { address, email, name, phone },
    setFormData,
    flavor,
    setFlavor,
    size,
    setSize
  } = useContext(DataContext)

  if (!readToken('tokenPageSuccess') && typeof window !== 'undefined') {
    return (window.location.href = '/')
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    getStorage('flavor') && setFlavor(getStorage('flavor'))
    getStorage('size') && setSize(getStorage('size'))
    getStorage('cart') && setCart(getStorage('cart'))
    getStorage('additionals') && setAdditionals(getStorage('additionals'))
    getStorage('form') && setFormData(getStorage('form'))
  }, [setAdditionals, setCart, setFlavor, setFormData, setSize])

  const getPontuation = () => {
    return flavor.find(
      (el: { recommendationDay: boolean }) => el.recommendationDay
    )?.points
  }

  const arrayAdditionals = additionals.filter(
    (el: { qtd: number }) => el.qtd > 0
  )

  const form = address !== undefined ? Object.entries(address) : []

  const flavorList = flavor
    .map((el: { name: string }) => `• ${el.name}%0a`)
    .join(',')
    .replace(/,+/g, '')

  const formList = form.map(el => `%0a ${el[1]}`)

  const additionalsList =
    arrayAdditionals.length !== 0
      ? '%0a*Adiconais:*%0a' +
        arrayAdditionals
          .map(el => `• ${el.qtd} x ${el.name}%0a`)
          .join(',')
          .replace(/,+/g, '')
      : ''

  const pontuationText =
    getPontuation() > 0
      ? '• Sim! 😀. Você selecionou a recomendação do dia e acumulou ➕' +
        `${getPontuation()} pontos para a próxima compra!`
      : 'Não selecionada! 😐'

  const SendZap = () => {
    // não exceder 2.083 caracteres na url! (valores atuais possíveis de serem gerados são menores que 1000)
    window.location.href =
      `https://api.whatsapp.com/send?phone=55${phone}&text=%0a` +
      `*DADOS%20DO%20PEDIDO:*%0a%0a*Nome%20Completo:*%0a${name}%0a%0a` +
      `*E-mail:*%0a${email}%0a%0a*Celular:*%0a${phone}%0a%0a` +
      `*Endereço:*${formList}.%0a%0a*Sabor(es):*%0a${flavorList}%0a` +
      `*Tamanho:*%0a•%20${size.size}%0a${additionalsList}%0a` +
      `*Recomendação%20do%20dia:*%0a${pontuationText}%0a%0a` +
      `*TOTAL:*%0a${useCart(cart)}%0a`

    // remove todos os tokens caso retorne para essa página após enviar o pedido
    removeAllTokens()

    sessionStorage.clear()
  }

  return (
    <>
      <C.HeadPage title="Checkout Concluído" />
      <C.Steps activeStep={[true, true, true, true, true]} />
      <C.TitleSection title="Confirmar Envio do pedido" />
      <C.Cart />
      <c.Container>
        <S.TitleComponent>Resumo do Pedido</S.TitleComponent>
        <S.ContainerSuccess>
          <S.Card>
            <S.CardContent>
              <S.ContainerList>
                <S.Title>Sabor(es):</S.Title>
                <ul>
                  {flavor.map((el: { name: string }) => (
                    <li key={el.name}>{'• ' + el.name}</li>
                  ))}
                </ul>
                <br />
                <S.Title>Tamanho:</S.Title>
                <li>{'• ' + size.size}</li>
                <br />
                {arrayAdditionals.length !== 0 && (
                  <>
                    <S.Title>Adiconais:</S.Title>
                    <ul>
                      {arrayAdditionals.map(el => (
                        <li key={el.name}>
                          • {el.qtd} x {el.name}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </S.ContainerList>
              <S.ContainerList>
                <S.Title>Nome Completo:</S.Title>
                <p>{name}</p>
                <br />
                <S.Title>E-mail:</S.Title>
                <p>{email}</p>
                <br />
                <S.Title>Celular:</S.Title>
                <p>{phone}</p>
              </S.ContainerList>
              <S.ContainerList>
                <S.Title>Endereço</S.Title>
                {form.map(el => (
                  <p key={el[0]}>{el[1]}.</p>
                ))}
              </S.ContainerList>
              <S.ContainerList>
                <S.Title>Recomendação do dia?</S.Title>
                {getPontuation() > 0 ? (
                  <p>
                    • Sim! 😀. Você selecionou a recomendação do dia e acumulou
                    <b>{` +${getPontuation()} `}</b>
                    pontos para a próxima compra!
                  </p>
                ) : (
                  <p>• Não selecionada! 😐</p>
                )}
              </S.ContainerList>
            </S.CardContent>

            <S.BtnSend onClick={SendZap}>
              Enviar pedido pelo WhatsApp <S.Zap />
            </S.BtnSend>
          </S.Card>
        </S.ContainerSuccess>
        <S.WrapperBtn>
          <C.BtnNext text="Voltar" route={'/etapa-4'} />
        </S.WrapperBtn>
      </c.Container>
    </>
  )
}

export default Sucesso
