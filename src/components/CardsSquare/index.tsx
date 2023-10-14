import * as S from 'components/CardsSquare/styles'
import Link from 'next/link'

interface CardSquareProps {
  data: [
    {
      id: string
      img: string
      ingredients: string
      name: string
      points: string
      recommendationDay: string
    }
  ]
}

const CardsSquare = ({ data }: CardSquareProps) => {

  return (
    <>
      <S.ContainerCards>
        {data.map(el => (
          <S.Card key={el.id}>
            <S.ContainerImg>

                <img
                  src={`https://annetom.com/api-img/pizzas/${el.img}.jpg`}
                  alt="Imagem de uma pizza"
                />

            </S.ContainerImg>
            <S.ContainerInfo bonus={el.recommendationDay}>
              <S.Title>PIZZA {el.name}</S.Title>
              <em>*Recomendação do dia</em>
              <S.ContentInfo>
                <S.SubTitle>Ingredientes:</S.SubTitle>
                <S.Text>{el.ingredients}</S.Text>
              </S.ContentInfo>
              <Link href="/etapa-1">
                <a>
                  <S.ButtonCard>PEÇA AGORA</S.ButtonCard>
                </a>
              </Link>
            </S.ContainerInfo>
          </S.Card>
        ))}
      </S.ContainerCards>
    </>
  )
}

export default CardsSquare
