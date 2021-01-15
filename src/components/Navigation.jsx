import styled from 'styled-components'

const Navigation = styled.header`
  display: inline-flex;
  top: 0;
  margin: auto;
  padding: 32px 16px;
  text-align: right;
  right: 0;
  position: fixed;

  @media only screen and (max-width: 700px) {
    padding: 0;
    bottom: 20px;
    top: unset;
    right: 20px;
  }
`

export default Navigation
