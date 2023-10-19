import * as S from 'styles/pages/404'
import { c } from 'theme'
import Link from 'next/link'
import * as C from 'components'

const Custom404 = () => {

  return (
    <>
      <C.HeadPage title="Página de Erro" />
      <C.TitleSection title="Erro 404" />
      <c.Container>
        <S.ContainImg>

            <img
              src="https://annetom.com/img/not-found.svg"
              alt="Erro 404"
              width="400"
              height="400"
            />

        </S.ContainImg>

        <S.Paragraph>
          Página não encontrada! Por favor, verifique a url acessada.
          <br />
          <br />
          Caso prefira, clique no botão abaixo e retorne para a página inicial:
        </S.Paragraph>
        <Link href="/" passHref>
          <S.NavLink>
            <S.BtnHome>Página Inicial</S.BtnHome>
          </S.NavLink>
        </Link>
      </c.Container>
    </>
  )
}

export default Custom404
