import styled from 'styled-components'

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

export default Title
