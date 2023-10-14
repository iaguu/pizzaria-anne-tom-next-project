import axios from 'axios'
import { c } from 'theme'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { readToken } from 'utils/HandleToken'
import * as C from 'components'
import * as S from 'styles/pages/etapa-3'

const Etapa3 = ({
  dataApi
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!readToken('tokenPageStep3') && typeof window !== 'undefined') {
    return (window.location.href = '/')
  }

  return (
    <>
      <C.HeadPage title="Checkout 3/4" />
      <C.Steps activeStep={[true, true, true, false, false]} />
      <C.TitleSection title="Selecione adicionais para a pizza" />
      <C.Cart />
      <c.Container>
        <C.Additional data={dataApi.additionals} />
        <S.WrapperBtn>
          <C.BtnNext text="Voltar" route={'/etapa-2'} />
          <S.Space />
          <C.BtnNext
            route={'/etapa-4'}
            token={{
              name: 'tokenPageStep4',
              value: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ2'
            }}
          />
        </S.WrapperBtn>
      </c.Container>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await axios.get('https://annetom.com/api/additionals.json')
  const dataApi = data[0]

  return {
    props: {
      dataApi
    }
  }
}

export default Etapa3
