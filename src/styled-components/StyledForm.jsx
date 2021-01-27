import styled from 'styled-components'
import {Form} from 'formik'

const StyledForm = styled(Form)`
  display: grid;
  background-color: #e5f6ff;
  color: #083576;
  z-index: 100;
  width: 40%;
  margin: auto;
  border-radius: 8px;
  padding: 16px 32px;
  animation: fadeIn 0.5s;
  text-align: left;
  top: 50%;
  left: 46%;
  position: fixed;
  transform: translate(-46%, -54%);

  @media (max-width: 1000px) {
    width: 75%;
  }
`

export default StyledForm
