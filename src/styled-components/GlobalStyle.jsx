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
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizelegibility;
    background-color: #E5F6FF;
    color: #083576;
    background-image: url(${background});
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
  }

  body,
  h2,
  h3,
  input {
    font-weight: 400;
  }

  /* h1 {
    text-transform: uppercase;
    font-weight: 900;
    font-size: 100px;
    margin: 0;
  }

  .title-1, .title-2 {
    position: fixed;
    padding: 20px;
  } */

  /* .title-1 {
    left: 0;
    top: 0;
  }

  .title-2 {
    bottom: 0;
    right: 0;
  } */

  h2, label {
    font-size: 28px;
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
  }

  input,
  textarea {
    font-size: 20px;
    font-family: 'Authentic Sans';
    background-color: #E5F6FF;
  }

  input,
  textarea {
    padding: 12px;
    margin: 8px 0 38px;
    border-radius: 8px;
    border: 4px solid #A8C7D8;
    color: #083576;
  }

  input:focus, textarea:focus {
    border: 4px solid #ED6F95;
  }

  input {
    width: 30%;
  }

  textarea {
    height: 132px;
  }

  label {
    margin: 10px 0;
  }

  /* img.blob, */
  /* .thought, */
  form {
    top: 50%;
    left: 50%;
    position: fixed;
    transform: translate(-46%, -54%);
  }

  /* img.blob {
    width: 75%;
    z-index: -10;
  } */

  /* .thought {
    width: 35%;
    color:#FFF;
  } */

  /* .error-message {
    color: #ED6F95;
    margin: 8px 0 4px;
    font-size: 16px;
  } */

  @media (max-width: 1000px) {
    /* h1 {
      font-size: 50px;
    } */

    /* .title-2 {
      bottom: unset;
      right: unset;
      left: 0;
    } */

    h2 {
      font-size: 24px;
    }

    /* img.blob {
      width: 100%;
    } */

    label {
      font-size: 20px;
      margin: 10px 0 0 0;
    }

    form {
      width: 70%;
    }
  }

  @media (max-width: 700px) {
    h3 {
      margin: 16px 0;
    }

    input[type='text'],
    textarea {
      width: auto;
    }

    textarea {
      height: 150px;
    }

    /* .thought {
      width: 80%;
    } */

    /* img.blob {
      width: 175%;
    } */
  }
`

export default GlobalStyle
