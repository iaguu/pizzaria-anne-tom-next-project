import { ReactNode, useRef } from 'react'
import * as S from 'components/ContainerCardControlRender/styles'
import { useLazyLoadWithIntersectionObserver } from 'hooks/useLazyLoadWithIntersectionObserver'

interface ContainerCCRProps {
  children: ReactNode
  minHeight?: number
}

export const ContainerCardControlRender = ({
  children,
  ...props
}: ContainerCCRProps) => {
  const renderRef = useRef<HTMLDivElement>(null)

  const { showComponent } = useLazyLoadWithIntersectionObserver(renderRef, {
    distancePXWindowCallComponent: 0
  })

  return (
    <S.Wrapper ref={renderRef} {...props}>
      {showComponent && children}
    </S.Wrapper>
  )
}
