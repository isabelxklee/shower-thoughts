import {createGlobalStyle} from 'styled-components'

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
  }

  body,
  h1,
  h2,
  h3,
  input {
    font-weight: 400;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 2.4rem;
  }

  h3 {
    font-size: 2rem;
  }

  p {
    margin: 0;
    font-size: 1rem;
  }

  form {
    display: inline-grid;
    background-color: #E5F6FF;
    color: #083576;
    z-index: 2;
    width: 50%;
    height: 50%;
    top: 4rem;
    position: absolute;
    margin: auto;
    right: 20%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 0.4rem;
    padding: 2rem 4rem 13rem;
    animation: fadeIn 0.5s;
  }

  label,
  input,
  textarea {
    font-size: 1.2rem;
    font-family: 'Authentic Sans';
  }

  input,
  textarea {
    padding: 0.8rem;
    margin: 0.4rem 0 2rem 0;
    border-radius: 0.2rem;
    border: 3px solid #ED6F95;
  }

  textarea {
    height: 5rem;
  }

  .button-group {
    display: flex;
  }

  .error-message {
    color: #ED6F95;
    margin: 0.6rem 0;
    font-size: 1rem;
  }

  section#thought {
    padding: 6rem;
    text-align: center;
  }

  @media only screen and (max-width: 700px) {
    h2 {
      margin: 0;
      font-size: 2.4rem;
    }

    h3 {
      margin: 1rem 0;
    }

    form {
      width: auto;
      height: fit-content;
      margin: 0;
      padding: 3rem;
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
  }
`

export default GlobalStyle
