import styled from 'styled-components'
import {Field} from 'formik'

const StyledTextArea = styled(Field)`
  font-size: 20px;
  font-family: 'Authentic Sans';
  background-color: #e5f6ff;
  padding: 12px;
  margin: 8px 0 38px;
  border-radius: 8px;
  border: 4px solid #a8c7d8;
  color: #083576;
  height: 132px;

  :focus {
    border: 4px solid #ed6f95;
  }

  @media (max-width: 700px) {
    width: auto;
    height: 150px;
  }
`

export default StyledTextArea
