import { useContext, useEffect } from 'react'
import * as S from 'components/Additional/styles'
import { DataContext } from 'hooks/UseContext'
import { useCart } from 'hooks/UseCart'
import { getStorage, setStorage } from 'utils/HandleSessionStorage'

interface AdditionalProps {
  data: [
    {
      id: string
      name: string
      price: number
      qtd: number
      qtdMax: number
      img: string
    }
  ]
}

export const Additional = ({ data }: AdditionalProps) => {
  const { cart, setCart, additionals, setAdditionals } =
    useContext(DataContext)

  // popula o estado com o objeto additionals da api
  useEffect(() => {
    if (getStorage('additionals')) {
      setAdditionals(getStorage('additionals'))
    } else {
      setAdditionals(data)
    }
  }, [data, setAdditionals])

  useEffect(() => {
    setStorage('additionals', additionals)
    setStorage('cart', cart)
  }, [additionals, cart])

  const sumQtdAdditionals = (price: number) => {
    setCart(cart + price)
  }

  const ConvertNumberToCurrency = (param: number) => useCart(param)

  const removeAdditional = (i: number) => {
    const changeAdditionals = additionals
    changeAdditionals[i].qtd = changeAdditionals[i].qtd - 1
    sumQtdAdditionals(-changeAdditionals[i].price)
  }

  const addAdditional = (i: number) => {
    const changeAdditionals = additionals
    changeAdditionals[i].qtd = changeAdditionals[i].qtd + 1
    setAdditionals(changeAdditionals)

    sumQtdAdditionals(changeAdditionals[i].price)
  }

  return (
    <>
      <S.TitleComponent>Adicionais</S.TitleComponent>
      <S.ContainerMain>
        {data.map((el, i) => (
          <S.Card key={el.id}>
            <S.ContainerAdditional>
              <S.Box>
                <S.BoxImg>

                    <img
                      src={`https://annetom.com/api-img/additionals/${el.img}.jpg`}
                      alt={el.name}
                    />
                  
                </S.BoxImg>

                <S.ContainerInfo>
                  <S.Title>{el.name}</S.Title>
                  <S.ContentInfo>
                    <S.SubTitle>(200g / Porção)</S.SubTitle>
                  </S.ContentInfo>
                  <S.Title>{ConvertNumberToCurrency(el.price)}</S.Title>
                </S.ContainerInfo>

                <S.AddItem>
                  <S.BtnCount
                    onClick={() => removeAdditional(i)}
                    disabled={additionals[i]?.qtd === 0}
                  >
                    -
                  </S.BtnCount>

                  <input
                    type="number"
                    value={additionals[i]?.qtd || 0}
                    readOnly
                  />

                  <S.BtnCount
                    onClick={() => addAdditional(i)}
                    disabled={additionals[i]?.qtd === additionals[i]?.qtdMax}
                  >
                    +
                  </S.BtnCount>
                </S.AddItem>
              </S.Box>
            </S.ContainerAdditional>
          </S.Card>
        ))}
      </S.ContainerMain>
    </>
  )
}
