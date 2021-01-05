import styled from 'styled-components'

const PrimaryButton = styled.button`
  font-family: 'Authentic Sans', 'Helvetica', sans-serif;
  background-color: #ed6f95;
  color: white;
  margin: 0rem 1rem 1rem 0;
  border-radius: 2rem;
  border: none;
  padding: 1rem 1.4rem;
  font-size: 1.2rem;
  font-weight: 400;
  transition: 0.3s;
  width: 50%;
  display: inline-block;
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
