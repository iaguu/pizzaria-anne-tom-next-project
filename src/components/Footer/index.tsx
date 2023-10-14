import * as S from 'components/Footer/styles'

export const Footer = () => {
  return (
    <>
      <S.Footer>
        <S.ContainerFooter>
        Desenvolvido por
          <a
            href="https://querocriarsite.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <em>Éverton Toffanetto</em>
          </a>
        </S.ContainerFooter>
        <br></br>
        <br></br>
        <S.ContainerFooter>
        Powered by
          <a
            href="https://devbarreto.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <em>DevBarreto</em>
          </a>
        </S.ContainerFooter>

      </S.Footer>
    </>
  )
}
