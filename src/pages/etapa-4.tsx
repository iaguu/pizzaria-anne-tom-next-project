import { c } from 'theme'
import { readToken } from 'utils/HandleToken'
import * as C from 'components'
import * as S from 'styles/pages/etapa-4'

export const Etapa4 = () => {
  if (!readToken('tokenPageStep4') && typeof window !== 'undefined') {
    return (window.location.href = '/')
  }

  return (
    <>
      <C.HeadPage title="Checkout 4/4" />
      <C.Steps activeStep={[true, true, true, true, false]} />
      <C.TitleSection title="Preencha com seus dados" />
      <C.Cart />
      <c.Container>
        <C.FormData />
        <S.WrapperBtn>
          <C.BtnNext text="Voltar" route={'/etapa-3'} />
        </S.WrapperBtn>
      </c.Container>
    </>
  )
}

export default Etapa4
