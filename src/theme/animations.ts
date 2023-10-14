import { keyframes } from 'styled-components'

export default {
  zoom: keyframes`
    0% {
      transform: scale(0.2);
    } 
    100% {
      transform: scale(1.0);
    }
  `,

  glass: keyframes`
    0% {
      background-color: rgba(0, 0, 0, 0);
      backdrop-filter: blur(0);
      -webkit-backdrop-filter: blur(0);
    } 100% {
      background-color: rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(0.7rem);
      -webkit-backdrop-filter: blur(0.7rem);
    }
  `,

  moveUp: keyframes`
    0% {
      transform: translateY(3rem);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  `,

  fadeIn: keyframes`
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  `,

  moveIn: (string1: string, string2: string, string3: string) => keyframes`
    to {
      transform: translate3d(${string1}, ${string2}, ${string3});
    }
  `,

  bouncedelay: keyframes`
    0%, 80%, 100% {
      transform: scale(0.0);
    }
    40% {
      transform: scale(1.0);
    }
  `,

  rotate: keyframes`
  to {
    transform: rotate(360deg);
  }
  `
}
