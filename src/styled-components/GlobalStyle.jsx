import {createGlobalStyle} from 'styled-components'
import background from '../assets/desktop_landing.svg'
import authenticSans90 from '../fonts/Authentic-Sans-90.woff2'
import authenticSans150 from '../fonts/Authentic-Sans-150.woff2'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Authentic Sans';
    font-weight: 400;
    font-style: normal;
    src: local('Authentic Sans'),
         url(${authenticSans90}) format('woff2')
  }

  @font-face {
    font-family: 'Authentic Sans';
    font-weight: 900;
    font-style: normal;
    src: local('Authentic Sans'),
         url(${authenticSans150}) format('woff2')
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Authentic Sans', Helvetica, sans-serif;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizelegibility;
    color: #083576;
    background-color: #E5F6FF;
    background-image: url(${background});
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
  }

  h2 {
    font-size: 28px;
    font-weight: 400;
  }

  p {
    margin: 0;
    font-size: 16px;
  }

  form {
    display: grid;
    background-color: #E5F6FF;
    color: #083576;
    z-index: 100;
    width: 40%;
    margin: auto;
    border-radius: 8px;
    padding: 16px 32px;
    animation: fadeIn 0.5s;
    text-align: left;
    top: 50%;
    left: 50%;
    position: fixed;
    transform: translate(-46%, -54%);
  }

  textarea {
    font-size: 20px;
    font-family: 'Authentic Sans';
    background-color: #E5F6FF;
    padding: 12px;
    margin: 8px 0 38px;
    border-radius: 8px;
    border: 4px solid #A8C7D8;
    color: #083576;
    height: 132px;
  }

  textarea:focus {
    border: 4px solid #ED6F95;
  }

  @media (max-width: 1000px) {
    h2 {
      font-size: 24px;
    }

    form {
      width: 70%;
    }
  }

  @media (max-width: 700px) {
    textarea {
      width: auto;
      height: 150px;
    }
  }
`

export default GlobalStyle
