import { useContext, useEffect } from 'react'
import * as S from 'components/Size/styles'
import { DataContext } from 'hooks/UseContext'
import * as C from 'components'
import { useCart } from 'hooks/UseCart'
import { getStorage, setStorage } from 'utils/HandleSessionStorage'

interface SizeProps {
  sizes: [
    {
      size: string
      slices: number
      price: number
    },
    {
      size: string
      slices: number
      price: number
    }
  ]
}

export const Size = ({ sizes }: SizeProps) => {

  const {already, setAlready, price, setPrice, size, setSize, setCart } = useContext(DataContext)
  
  
  useEffect(() => getStorage('size') && setSize(getStorage('size')), [setSize])

  useEffect(() => getStorage('price') && setPrice(getStorage('price')), [setPrice])

  useEffect(() => getStorage('cart') && setCart(getStorage('cart')), [setCart])

  useEffect(() => {
  
    if(already === false){
      setPrices();
    }

  })

  const setPrices = () => {
    sizes[1].price = price;
    sizes[0].price = Math.round(price / 1.35);
    setAlready(true)
  }

  const ConvertToPrice = (price: number) => useCart(price)

  const addCart = (price: number) => {
    setCart(price)
    setStorage('cart', price)
  }

  const handleSizeChecked = (price: number, currentSize: string) => {


    const sizeAndPrice = { price: price, size: currentSize };

    setPrice(price); // Mantém o preço original imutável

    setSize(sizeAndPrice);

    setStorage('size', sizeAndPrice);

    addCart(price);

  }



  



  return (
    <>
      <S.TitleComponent>Tamanhos</S.TitleComponent>
      <S.ContainerSize>
        {sizes.map(el => (
          <S.Card key={el.size} verifyCheck={size.size === el.size}>
            <S.ContainerRadio>
              <S.RadioContent>
                <S.RadioLabel verifyCheck={size.size === el.size}>
                  <img
                    src="https://annetom.com/img/icons/radio.svg"
                    width="18"
                    height="18"
                    alt="Checkbox"
                  />
                  <img
                    src="https://annetom.com/img/icons/radio-checked.svg"
                    width="18"
                    height="18"
                    alt="Checkbox"
                  />
                  <input
                    type="radio"
                    checked={size.size === el.size}
                    onChange={() => handleSizeChecked(el.price, el.size)}
                    value={el.size}
                    name={el.size}
                  />
                </S.RadioLabel>
                <S.ContainerInfo>
                  <S.Title>Pizza {el.size}</S.Title>
                  <S.ContentInfo>
                    <S.SubTitle>
                      <img
                        src="https://annetom.com/img/icons/slice-pizza.svg"
                        alt="Imagem de uma pizza"
                        width="24"
                        height="25"
                      />
                      ({el.slices} Fatias)
                    </S.SubTitle>
                  </S.ContentInfo>
                  <S.Title>{ConvertToPrice(Math.round(el.price))}</S.Title>
                </S.ContainerInfo>
              </S.RadioContent>
            </S.ContainerRadio> 
          </S.Card>
        ))}

        <S.WrapperBtn>
          <C.BtnNext text="Voltar" route={'/etapa-1'} />
          <S.Space />
          <C.BtnNext
            route={'/etapa-3'}
            disabled={!size.size}
            token={{
              name: 'tokenPageStep3',
              value: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ1'
            }}
          />
        </S.WrapperBtn>
      </S.ContainerSize>
    </>
  )
}
