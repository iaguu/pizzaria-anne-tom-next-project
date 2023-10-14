import styled from 'styled-components'
import { s } from 'theme'
import { ExclamationTriangle, CheckCircleFill } from '@styled-icons/bootstrap'
import { ToastContainer } from 'react-toastify'

export const ToastAlertContainer = styled(ToastContainer)`
  .Toastify__toast--error {
    background-color: ${s.light};
    //border-left: 0.5rem solid ${s.error};

    b {
      color: ${s.error};
    }

    .Toastify__progress-bar {
      background: ${s.error};
    }
  }

  .Toastify__toast--success {
    background-color: ${s.light};
    //border-left: 0.5rem solid ${s.secondary};

    b {
      color: ${s.secondary};
    }

    .Toastify__progress-bar {
      background: ${s.secondary};
    }
  }

  .Toastify__progress-bar {
    height: 0.4rem;
  }

  .Toastify__toast-body {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    color: ${s.darkGrey};

    b {
      margin-right: 0.5rem;
      font-weight: 600;
      font-size: ${s.textSubtitleCard};
      text-transform: uppercase;
    }
  }
`
export const IconError = styled(ExclamationTriangle)`
  width: 2rem;
  height: 2rem;
  margin-right: 1rem;
  margin-top: 0.2rem;
  color: ${s.error};
`

export const IconSuccess = styled(CheckCircleFill)`
  width: 2rem;
  height: 2rem;
  margin-right: 1rem;
  margin-top: 0.2rem;
  color: ${s.secondary};
`
