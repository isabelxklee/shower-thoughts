import styled from 'styled-components'

const ThoughtNavigation = styled.div`
  z-index: 100;
  top: 72%;
  left: 49%;
  position: fixed;
  transform: translate(-46%, -54%);
  width: 75%;

  @media (max-width: 700px) {
    top: 74%;
  }
`

export default ThoughtNavigation
