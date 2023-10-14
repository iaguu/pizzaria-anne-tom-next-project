import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import * as S from 'components/Toast/styles'

const configToast = {
  autoClose: 7000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
  progress: undefined
}

export const NotifyError = (prop1: string, prop2: string) => {
  toast.error(
    <>
      <span>
        <S.IconError />
      </span>
      <div>
        <b>{prop2}</b>
        {prop1}
      </div>
    </>,
    {
      ...configToast,
      className: 'error'
    }
  )
}

export const NotifySuccess = (prop1: string, prop2: string) => {
  toast.success(
    <>
      <span>
        <S.IconSuccess />
      </span>
      <div>
        <b>{prop2}</b>
        {prop1}
      </div>
    </>,
    {
      ...configToast,
      className: 'success'
    }
  )
}

export const Toast = () => {
  return <S.ToastAlertContainer limit={3} />
}
