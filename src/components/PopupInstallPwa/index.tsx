import * as S from 'components/PopupInstallPwa/styles'
import { SetStateAction, useEffect, useState } from 'react'

export const PopupInstallPwa = () => {
  const [isActive, setIsActive] = useState(false)
  const [deferredPrompt, setDeferredPrompt] = useState<SetStateAction<any>>()

  useEffect(() => {
    window.addEventListener('beforeinstallprompt', e => {
      // Impedir que o mini-infobar apareça no celular
      e.preventDefault()
      // Armazena o evento para poder ser acionado mais tarde.
      setDeferredPrompt(e)
      // Atualizar a interface e notifica o usuário de que pode instalar o PWA
      setIsActive(true)
    })
  }, [])

  const closePopup = () => setIsActive(false)

  const handleInstallPwa = () => {
    closePopup()

    // Mostra o prompt de instalação
    deferredPrompt.prompt()

    // Aguarde o usuário responder ao prompt
    deferredPrompt.userChoice.then((choiceResult: { outcome: string }) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('Você aceitou a instalação do App')
      } else {
        console.log(
          'Infelizmente você não aceitou a instalação do App, pressione "ctrl + F5" e tente novamente'
        )
      }
    })
  }

  return (
    <>
      {isActive && (
        <S.ContainerPopup>
          <div>
            <S.ContainerImg>
              <span onClick={() => closePopup()}>
                <S.Close />
              </span>
              <img
                src="https://annetom.com/icons/icon-72x72.png"
                width="50"
                height="50"
                alt="Pizzaria Anne & Tom"
              />
              <img
                src="https://annetom.com/img/logo-popup-pwa.png"
                alt="Pizzaria Anne & Tom"
                width="240"
                height="50"
              />
            </S.ContainerImg>
            <p>Adicione nosso App à tela inicial!</p>
            <button onClick={() => handleInstallPwa()}>Adicionar Atalho</button>
          </div>
        </S.ContainerPopup>
      )}
    </>
  )
}
