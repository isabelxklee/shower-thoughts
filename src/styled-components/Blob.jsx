import styled from 'styled-components'

const Blob = styled.img`
  top: 50%;
  left: 50%;
  position: fixed;
  transform: translate(-46%, -54%);
  width: 75%;
  z-index: -10;

  @media (max-width: 1000px) {
    width: 100%;
  }

  @media (max-width: 700px) {
    width: 175%;
  }
`

export default Blob
