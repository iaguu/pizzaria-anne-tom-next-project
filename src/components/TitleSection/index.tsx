import * as S from 'components/TitleSection/styles'
import { c } from 'theme'

interface TitleSectionProps {
  title: string
}

export const TitleSection = ({ title }: TitleSectionProps) => {
  return (
    <>
      <c.Container>
        <S.TitleSection>{title}</S.TitleSection>
      </c.Container>
    </>
  )
}
