import { createGlobalStyle } from 'styled-components'
import { s } from 'theme'

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    text-decoration: none !important;
    -webkit-font-smoothing: antialiased !important;
    list-style: none !important;
    outline: none;
    font-family: 'Poppins', 'Arial', sans-serif !important;
  }

  html {
    font-size: 62.5%;

   /* ${s.breakMax(57.6)} {
      font-size: 50.5%;
    }*/

    ${s.breakMax(76.8)} {
      font-size: 53.5%;
    }
    
    ${s.breakMax(99.2)} {
      font-size: 56.5%;
    }

    ${s.breakMax(120)} {
      font-size: 59.5%;
    }
  }

  body,
  html,
  #__next {
    background-color: ${s.bgDefault};
    color: ${s.darkGrey};
  }

  body, #root, input, select, textarea, button {
    font: 400 1.6rem 'Poppins', sans-serif;
  }

  button {
    border: none;
    border-radius: 0.6rem;
  }

  #__next {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    min-height: 100vh;
  }
  
  a,
  a:active {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  ::-webkit-scrollbar,
  scrollbar-width {
    width: 0.7rem !important;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${s.primary};
    border-radius: 2rem;
  }

  :root {
    scrollbar-color: ${s.primary} ${s.bgDefault} !important;
    scrollbar-width: 0.7rem !important;
  }
`
