import styled from 'styled-components'

const PrimaryButton = styled.button`
  font-family: 'Authentic Sans', 'Helvetica', sans-serif;
  background-color: #ed6f95;
  color: #fff;
  margin: 0 16px 16px 0;
  border-radius: 100px;
  border: none;
  padding: 16px 22px;
  font-size: 20px;
  font-weight: 400;
  transition: 0.3s;
  display: inline-block;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }

  @media (max-width: 700px) {
    font-size: 16px;
    padding: 10px 22px;
    margin: 0 10px 10px 0;
  }
`

export default PrimaryButton
