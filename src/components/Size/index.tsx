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

  const {already, setAlready, price, setPrice, size, setSize, cart, setCart } = useContext(DataContext)
  
 
  useEffect(() => getStorage('size') && setSize(getStorage('size')), [setSize])

  useEffect(() => getStorage('price') && setPrice(getStorage('price')), [setPrice])

  useEffect(() => getStorage('cart') && setCart(getStorage('cart')), [setCart])

  useEffect(() => {
  
    if(already === false){
      console.log("Está fechado:" + already);
      setPrices();
    }

  })

  const setPrices = async () => { 
    const preco = await getStorage('price')

    
    if (getStorage('additionals')) {
      var tempadditionals = await getStorage('additionals');

      for (let i = 0; i < tempadditionals.length; i++) {
        tempadditionals[i] = 0;        
      }

      setStorage('additionals', tempadditionals)
    }

    sizes[1].price = preco;
    sizes[0].price = Math.round(preco / 1.35);

    setAlready(true)
    setPrice(preco);

    console.log("Preço atual: R$" + price);
    console.log("Carrinho atual: R$" + cart);
    console.log("Está fechado:" + already);
    
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

      <S.Card key={sizes[1].size} verifyCheck={size.size === sizes[1].size}>
            <S.ContainerRadio>
              <S.RadioContent>
                <S.RadioLabel verifyCheck={size.size === sizes[1].size}>
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
                    checked={size.size === sizes[1].size}
                    onChange={() => handleSizeChecked(sizes[1].price, sizes[1].size)}
                    value={sizes[1].size}
                    name={sizes[1].size}
                  />
                </S.RadioLabel>
                <S.ContainerInfo>
                  <S.Title>Pizza {sizes[1].size}</S.Title>
                  <S.ContentInfo>
                    <S.SubTitle>
                      <img
                        src="https://annetom.com/img/icons/slice-pizza.svg"
                        alt="Imagem de uma pizza"
                        width="24"
                        height="25"
                      />
                      ({sizes[1].slices} Fatias)
                    </S.SubTitle>
                  </S.ContentInfo>
                  <S.Title>{ConvertToPrice(Math.round(sizes[1].price))}</S.Title>
                </S.ContainerInfo>
              </S.RadioContent>
            </S.ContainerRadio> 
          </S.Card>

          <S.Card key={sizes[0].size} verifyCheck={size.size === sizes[0].size}>
            <S.ContainerRadio>
              <S.RadioContent>
                <S.RadioLabel verifyCheck={size.size === sizes[0].size}>
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
                    checked={size.size === sizes[0].size}
                    onChange={() => handleSizeChecked(sizes[0].price, sizes[0].size)}
                    value={sizes[0].size}
                    name={sizes[0].size}
                  />
                </S.RadioLabel>
                <S.ContainerInfo>
                  <S.Title>Pizza {sizes[0].size}</S.Title>
                  <S.ContentInfo>
                    <S.SubTitle>
                      <img
                        src="https://annetom.com/img/icons/slice-pizza.svg"
                        alt="Imagem de uma pizza"
                        width="24"
                        height="25"
                      />
                      ({sizes[0].slices} Fatias)
                    </S.SubTitle>
                  </S.ContentInfo>
                  <S.Title>{ConvertToPrice(Math.round(sizes[0].price))}</S.Title>
                </S.ContainerInfo>
              </S.RadioContent>
            </S.ContainerRadio> 
          </S.Card>

        <S.WrapperBtn>
          <C.BtnNext text="Voltar" route={'/etapa-1'} />
          <S.Space />
          <C.BtnNext
            route={'/etapa-4'}
            disabled={!size.size}
            token={{
              name: 'tokenPageStep4',
              value: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ1'
            }}
          />
        </S.WrapperBtn>
      </S.ContainerSize>
    </>
  )
}
