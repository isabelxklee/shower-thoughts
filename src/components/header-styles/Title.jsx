import styled from 'styled-components'

const Title = styled.h1`
  float: left;
  color: white;
  margin: 1rem;

  @media only screen and (max-width: 700px) {
    float: none;
    margin: 1rem 0;
  }
`

export default Title