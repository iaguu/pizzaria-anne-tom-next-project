import { useContext, useEffect } from 'react'
import * as S from 'components/Cart/styles'
import { DataContext } from 'hooks/UseContext'
import { c } from 'theme'
import { useCart } from 'hooks/UseCart'
import { getStorage } from 'utils/HandleSessionStorage'

export const Cart = () => {
  const { cart, setCart } = useContext(DataContext)

  const convertCart = useCart(cart)

  useEffect(() => getStorage('cart') && setCart(getStorage('cart')), [setCart])

  return (
    <>
      <c.Container>
        <S.ContainerCart>
          {cart === 0 ? (
            <img
              src="https://annetom.com/img/icons/cart.svg"
              alt="Imagem de uma pizza"
              width="80"
              height="50"
            />
          ) : (
            <img
              src="https://annetom.com/img/icons/cart-full.svg"
              alt="Imagem de uma pizza"
              width="80"
              height="50"
            />
          )}
          <S.Cart>
            Valor Total: <b>{convertCart}</b>
          </S.Cart>
        </S.ContainerCart>
      </c.Container>
    </>
  )
}
