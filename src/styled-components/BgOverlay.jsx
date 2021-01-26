import styled from 'styled-components'

const BgOverlay = styled.button`
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

export default BgOverlay
