import styled, {createGlobalStyle} from 'styled-components'
import background from './assets/desktop_landing.svg'
import authenticSans90 from './assets/fonts/Authentic-Sans-90.woff2'
import authenticSans150 from './assets/fonts/Authentic-Sans-150.woff2'
import {ReactComponent as BlobSVG} from './assets/desktop_blob.svg'

export const GlobalStyle = createGlobalStyle`
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

export const Wrapper = styled.div`
  padding: 64px 32px;
  text-align: center;
`

export const BgOverlay = styled.button`
  position: fixed;
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(8, 53, 118, 0.8);
  border: none;
  z-index: 1;
  cursor: default;
`

const Title = styled.h1`
  text-transform: uppercase;
  font-weight: 900;
  font-size: 100px;
  margin: 0;
  position: fixed;
  padding: 20px;

  @media (max-width: 1000px) {
    font-size: 50px;
  }
`

export const TitleTop = styled(Title)`
  left: 0;
  top: 0;

  @media (max-width: 700px) {
    padding: 20px;
  }
`

export const TitleBottom = styled(Title)`
  right: 0;
  bottom: 0;

  @media (max-width: 700px) {
    padding: 10px 20px;
    left: 0;
    right: unset;
    bottom: unset;
  }
`

export const Blob = styled(BlobSVG)`
  top: 50%;
  left: 50%;
  position: fixed;
  transform: translate(-46%, -54%);
  width: 75%;
  z-index: -10;

  @media (max-width: 1000px) {
    width: 125%;
  }

  @media (max-width: 700px) {
    width: 150%;
  }

  @media (max-width: 500px) {
    width: 200%;
  }
`

export const PrimaryButton = styled.button`
  font-family: 'Authentic Sans', 'Helvetica', sans-serif;
  background-color: #ed6f95;
  color: #fff;
  margin: 0 16px 16px 0;
  border-radius: 100px;
  border: none;
  padding: 16px 22px;
  font-size: 20px;
  font-weight: 400;
  transition: 0.3s;
  display: inline-block;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }

  @media (max-width: 700px) {
    font-size: 16px;
    padding: 10px 22px;
    margin: 0 10px 10px 0;
  }
`
