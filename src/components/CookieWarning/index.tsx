import * as S from 'components/CookieWarning/styles'
import { useEffect, useState } from 'react'

export const CookieWarning = () => {
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    localStorage.getItem('acceptedCookies')
      ? setIsActive(false)
      : setIsActive(true)
  }, [])

  const accepted = () => {
    localStorage.setItem('acceptedCookies', 'sim')
    setIsActive(false)
  }

  return (
    <>
      {isActive && (
        <S.ContainerWarning>
          <S.Content>
            <p>
              Ao navegar neste site, você aceita os cookies que usamos para
              melhorar a sua experiência.
            </p>
            <button onClick={() => accepted()}>Entendi</button>
          </S.Content>
        </S.ContainerWarning>
      )}
    </>
  )
}
