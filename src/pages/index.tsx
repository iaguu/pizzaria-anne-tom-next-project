import * as S from 'styles/pages/home'
import * as C from 'components'
import axios from 'axios'
import { c } from 'theme'
import { GetStaticProps, InferGetStaticPropsType } from 'next'

const Home = ({ dataApi }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <C.HeadPage title="Início" />
      <C.Banner />
      <C.TitleSection title="Peça a sua pizza online agora!" />
      <c.Container>
        <S.Paragraph>
          Aproveite a nossa promoção! Comprando a nossa recomendação de pizza do
          dia você acumula pontos para a próxima compra. Quantos mais pontos
          você acumular, maior será o desconto na próxima compra.
        </S.Paragraph>
        <C.ContainerCardControlRender minHeight={67.8}>
          <C.CardsSquare data={dataApi.pizzas} />
        </C.ContainerCardControlRender>
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

export default Home
