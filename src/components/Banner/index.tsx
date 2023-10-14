import * as S from 'components/Banner/styles'

export const Banner = () => {

  return (
    <>
      <S.ContainerBanner>
        <S.ContainerInfo>
          <img
            src="https://annetom.com/img/logo-y.png"
            alt="Pizzaria Toffanetto"
            width="885"
            height="410"
          />
          <h3>
            Pizzas exageradamente recheadas e saborosas, feitas com amor e dedicação,
            como manda a tradição italiana.
          </h3>
        </S.ContainerInfo>

        <S.ContainImg>
          <img
              src="https://annetom.com/img/banners/banner-home.jpg"
              alt="Bem-vindo(a) à Pizzaria Toffanetto"
            />
        </S.ContainImg>
      </S.ContainerBanner>
    </>
  )
}
