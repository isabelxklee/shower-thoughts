import styled from 'styled-components'

const LinkSection = styled.section`
  float: right;
  display: inline-flex;

  @media only screen and (max-width: 700px) {
    float: none;
    display: grid;
    grid-row-gap: 0.4rem;
  }
`

export default LinkSection