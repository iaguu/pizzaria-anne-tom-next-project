import axios from 'axios'
import { c } from 'theme'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import * as C from 'components'
import { readToken } from 'utils/HandleToken'

const Etapa2 = ({
  dataApi
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!readToken('tokenPageStep2') && typeof window !== 'undefined') {
    return (window.location.href = '/')
  }

  return (
    <>
      <C.HeadPage title="Checkout 2/4" />
      <C.Steps activeStep={[true, true, false, false, false]} />
      <C.TitleSection title="Selecione o tamanho da pizza" />
      <C.Cart />
      <c.Container>
        <C.Size sizes={dataApi.sizesAndPrices} />
      </c.Container>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await axios.get('https://annetom.com/api/pizzas.json')
  const dataApi = data[0]

  return {
    props: {
      dataApi
    }
  }
}

export default Etapa2
