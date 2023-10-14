import styled, { css } from 'styled-components'
import { s } from 'theme'

export const ContainerCards = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 3rem;
  margin-top: 3.5rem;
  padding-left: 0;
  padding-right: 0;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  border-radius: 1rem;
  margin-bottom: 2.5rem;
  box-shadow: -0.6rem -0.6rem 1.6rem 0 ${s.light},
    0.6rem 0.6rem 1.6rem 0 ${s.boxShadowDark};
  width: 100%;
  border: 0.2rem solid ${s.bgDefault};
  transition: border-color 0.2s linear;

  &:hover {
    border: 0.2rem solid ${s.secondary};
  }

  ${s.break(40)} {
    flex-direction: column;
    width: calc(50% - 1.3rem);
    margin-bottom: 2.5rem;
  }

  ${s.break(75)} {
    flex-direction: row;
    width: calc(50% - 2rem);
    margin-bottom: 3.5rem;
  }
`

export const ContainerImg = styled.div`
  overflow: hidden;
  border-radius: 1rem;
  width: 100%;
  min-width: 100%;
  height: 100%;
  min-height: 25rem;
  max-height: 25rem;
  position: relative;

  span {
    position: relative !important;
    width: 100%;
    min-width: 100%;
    height: 100%;
    min-height: 25rem;
    max-height: 25rem;
  }

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  ${s.break(75)} {
    min-width: 25rem;
  }

  ${s.break(128)} {
    min-width: 30rem;
  }
`

export const ContainerInfo = styled.div<{ bonus: string }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  margin-top: 2rem;
  height: 100%;

  ${({ bonus }) =>
    bonus &&
    css`
      border: 0.2rem solid ${s.primary};
      border-radius: 0.8rem;
      padding: 0.1rem 0.5rem 0.5rem 0.5rem;
    `};

  em {
    margin-top: 0.5rem;
    display: none;
    font-size: ${s.textCard};
    ${({ bonus }) =>
      bonus &&
      css`
        display: flex;
        color: ${s.primary};
      `};
  }

  ${s.break(75)} {
    margin-left: 2rem;
    margin-top: 0;
  }
`

export const ContentInfo = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.h2`
  font-weight: 800;
  color: ${s.primary};
  font-size: ${s.textTitleCard};
  text-transform: uppercase;
  margin-top: 0;
  margin-bottom: 0;
  width: fit-content;

  &:after {
    content: '';
    display: block;
    height: 0.5rem;
    width: 30%;
    background-color: ${s.secondary};
    margin-top: 0.6rem;
    border-radius: 1rem;
  }
`

export const SubTitle = styled.h3`
  color: ${s.dark};
  font-size: ${s.textPCard};
  font-weight: 600;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
`

export const Text = styled.p`
  font-size: ${s.textPCard};
  margin-top: 0;
`

export const ButtonCard = styled.button`
  background-color: ${s.secondary};
  width: 100%;
  padding: 1.3rem 0;
  font-weight: 800;
  border-radius: 1rem;
  font-size: ${s.textBtnCard};
  transition: background-color 0.2s linear;

  &:hover {
    background-color: ${s.secondaryHover};
  }

  ${s.breakMax(180.9)} {
    margin-top: 0.8rem;
  }
`
