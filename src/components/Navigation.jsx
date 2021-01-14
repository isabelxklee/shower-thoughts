import styled from 'styled-components'

const Navigation = styled.header`
  top: 0;
  margin: auto;
  padding: 2rem 1rem;
  text-align: right;
  right: 0;
  position: fixed;

  @media only screen and (max-width: 700px) {
    padding: 0;
    text-align: center;
    bottom: 20px;
    top: unset;
  }
`

export default Navigation
