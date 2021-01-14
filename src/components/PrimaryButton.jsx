import styled from 'styled-components'

const PrimaryButton = styled.button`
  font-family: 'Authentic Sans', 'Helvetica', sans-serif;
  background-color: #ed6f95;
  color: white;
  margin: 0 16px 16px 0;
  border-radius: 100px;
  border: none;
  padding: 16px 22px;
  font-size: 20px;
  font-weight: 400;
  transition: 0.3s;
  width: 50%;
  display: inline-block;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }

  @media (max-width: 700px) {
    margin: 0 10px 10px 0;
    width: 100%;
  }
`

export default PrimaryButton
