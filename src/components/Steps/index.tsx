import * as S from 'components/Steps/styles'
import { useRouter } from 'next/router'

interface StepsProps {
  activeStep: boolean[]
}

export const Steps = ({ activeStep }: StepsProps) => {
  const router = useRouter()

  const redirectRouter = (routerLink: string, step: number) => {
    activeStep[step] && router.push(routerLink).then(r => r)
  }

  return (
    <>
      <S.ContainerSteps>
        <S.ContainerLine>
          <S.LineStep actived={activeStep[1]} />
          <S.LineStep actived={activeStep[2]} />
          <S.LineStep actived={activeStep[3]} />
        </S.ContainerLine>

        <S.ContainerRounded>
          <div>
            <S.Step
              actived={activeStep[0]}
              onClick={() => redirectRouter('/etapa-1', 0)}
            >
              {activeStep[4] ? <S.Checked /> : '1'}
            </S.Step>
          </div>

          <div>
            <S.Step
              actived={activeStep[1]}
              onClick={() => redirectRouter('/etapa-2', 1)}
            >
              {activeStep[4] ? <S.Checked /> : '2'}
            </S.Step>
          </div>

          <div>
            <S.Step
              actived={activeStep[2]}
              onClick={() => redirectRouter('/etapa-3', 2)}
            >
              {activeStep[4] ? <S.Checked /> : '3'}
            </S.Step>
          </div>

          <div>
            <S.Step
              actived={activeStep[3]}
              onClick={() => redirectRouter('/etapa-4', 3)}
            >
              {activeStep[4] ? <S.Checked /> : '4'}
            </S.Step>
          </div>
        </S.ContainerRounded>
      </S.ContainerSteps>
    </>
  )
}
