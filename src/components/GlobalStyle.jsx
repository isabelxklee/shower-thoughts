import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Apfel Grotezk';
    font-weight: 400;
    font-style: normal;
    src: local('Apfel Grotezk'), url('../fonts/Apfel-Grotezk-Regular.woff') format('font-woff');
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Apfel Grotezk', Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizelegibility;
    background-color: #e8c030;
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
    font-size: 4rem;
  }

  h3 {
    font-size: 2rem;
  }

  p {
    margin: 0;
    font-size: 1rem;
  }

  .overlay {
    position: fixed;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
    cursor: pointer;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  form {
    display: inline-grid;
    background-color: white;
    color: black;
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
    font-family: 'Apfel Grotezk';
  }

  input,
  textarea {
    padding: 0.8rem;
    margin: 0.4rem 0 2rem 0;
    border-radius: 0.2rem;
    border: 2px solid black;
  }

  textarea {
    width: 50%;
    height: 5rem;
  }

  input[type='text'] {
    width: 10%;
  }

  input[type='submit'] {
    background-color: black;
    color: white;
    border: none;
    padding: 1rem 2.4rem;
    cursor: pointer;
  }

  .button-group {
    display: flex;
  }

  .error {
    color: rgb(218, 40, 0);
    margin: 0.6rem 0;
  }

  button#error {
    opacity: 0.5;
    cursor: default;
  }

  @media only screen and (max-width: 700px) {
    h2 {
      margin: 0;
      font-size: 2rem;
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
