import styled from 'styled-components'

const PrimaryButton = styled.button`
  font-family: 'Apfel Grotezk';
  background-color: black;
  color: white;
  margin: 0rem 1rem 1rem 0;
  border: 2px solid black;
  border-radius: 0.2rem;
  padding: 1rem 1.4rem;
  font-size: 1.2rem;
  font-weight: 400;
  transition: 0.3s;
  width: 25%;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }

  @media only screen and (max-width: 700px) {
    margin: 0.4rem 0;
    width: 100%;
  }
`

export default PrimaryButton