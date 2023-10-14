import axios from 'axios'
import { c } from 'theme'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import * as C from 'components'

const Etapa1 = ({
  dataApi
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <C.HeadPage title="Checkout 1/4" />
      <C.Steps activeStep={[true, false, false, false, false]} />
      <C.TitleSection title="Selecione o sabor da pizza" />
      <C.Cart />
      <c.Container>
        <C.Flavor data={dataApi.pizzas} />
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

export default Etapa1
