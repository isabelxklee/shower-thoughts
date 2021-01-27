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
`

export default GlobalStyle
