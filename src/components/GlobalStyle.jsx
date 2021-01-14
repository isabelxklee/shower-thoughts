import {createGlobalStyle} from 'styled-components'
import background from '../assets/background.png'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Authentic Sans';
    font-weight: 400;
    font-style: normal;
    src: local('Authentic Sans'),
         url('/src/fonts/Authentic-Sans-90.woff2') format('font-woff')
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
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    overflow: hidden;
  }

  body,
  h2,
  h3,
  input {
    font-weight: 400;
  }

  h1 {
    text-transform: uppercase;
    font-weight: 900;
    font-size: 100px;
    margin: 0;
    position: fixed;
  }

  h1.title-1 {
    left: 0;
    top: 0;
  }

  h1.title-2 {
    bottom: 0;
    right: 0;
  }

  h2 {
    font-size: 32px;
  }

  h2.thought-content {
    color:#E5F6FF;
  }

  p {
    margin: 0;
    font-size: 16px;
  }

  p.date {
    color: #E5F6FF;
  }

  form {
    display: inline-grid;
    background-color: #E5F6FF;
    color: #083576;
    z-index: 2;
    width: 50%;
    height: 50%;
    top: 60px;
    position: absolute;
    margin: auto;
    right: 20%;
    border-radius: 8px;
    padding: 16px 32px 120px;
    animation: fadeIn 0.5s;
    text-align: left;
  }

  label,
  input,
  textarea {
    font-size: 20px;
    font-family: 'Authentic Sans';
    background-color: #E5F6FF;
  }

  input,
  textarea {
    padding: 12px;
    margin: 0.4rem 0 2rem 0;
    border-radius: 0.2rem;
    border: 4px solid #A8C7D8;
  }

  input {
    width: 30%;
  }

  textarea {
    height: 5rem;
  }

  .button-group {
    display: flex;
    width: 50%;
  }

  .error-message {
    color: #ED6F95;
    margin: 10px 0;
    font-size: 16px;
  }

  .thought {
    margin: auto;
    position: relative;
    top: 200px;
    width: 455px;
  }

  @media only screen and (max-width: 700px) {
    h2 {
      font-size: 28px;
    }

    h3 {
      margin: 16px 0;
    }

    form {
      width: auto;
      height: fit-content;
      margin: 0;
      padding: 48px;
      top: 0;
      left: 0;
      right: 0;
      position: fixed;
      border-radius: 0;
      grid-row-gap: 0.6rem;
    }

    input[type='text'],
    textarea {
      width: auto;
    }

    .button-group {
      display: block;
    }

    img.large-blob {
      right: -25%;
      width: 200%;
    }

    section#thought {
      padding: 0;
      width: 100%;
    }
  }
`

export default GlobalStyle
