import styled from 'styled-components'

const TextLink = styled.a`
  color: white;
  font-family: 'Apfel Grotezk';
  font-size: 1.2rem;
  font-weight: 400;
  transition: 0.3s;
  margin: 1rem;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }

  @media only screen and (max-width: 700px) {
    margin: 0 0 0.6rem 0;
  }
`

export default TextLink