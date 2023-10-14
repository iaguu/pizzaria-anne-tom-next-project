import * as S from 'components/BtnNext/styles'
import { writeToken } from 'utils/HandleToken'
import Link from 'next/link'

interface Props {
  route: string
  text?: string
  disabled?: boolean
  token?: {
    name: string
    value: string
  }
}

export const BtnNext = ({ route, text, disabled, token }: Props) => {
  const handleClick = () => {
    !!token && writeToken(token.name, token.value)
  }

  return (
    <>
      <S.ContainerBtn center={text}>
        <Link href={route}>
          <a onClick={() => handleClick()}>
            <S.BtnNext disabled={disabled}>{text || 'Avançar'}</S.BtnNext>
          </a>
        </Link>
      </S.ContainerBtn>
    </>
  )
}
