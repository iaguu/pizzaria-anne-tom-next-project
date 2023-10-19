import * as S from 'components/Header/styles'
import Link from 'next/link'

export const Header = () => {
  return (
    <>
      <S.ContainerFluid>
        <S.Nav>
          <S.ContainerCenter>
            <Link href="/">
              <a>
                <S.Logo>
                  <img
                    src="https://annetom.com/img/logo-x.png"
                    alt="Pizzaria Anne & Tom"
                    width="245"
                    height="48"
                  />
                </S.Logo>
              </a>
            </Link>
          </S.ContainerCenter>
        </S.Nav>
      </S.ContainerFluid>
    </>
  )
}
