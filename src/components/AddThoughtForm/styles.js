import styled from 'styled-components'
import {Form, Field} from 'formik'
import {PrimaryButton} from '../../styles'

export const StyledForm = styled(Form)`
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

export const Label = styled.label`
  font-size: 28px;
  margin: 10px 0;

  @media only screen and (max-width: 1000px) {
    font-size: 20px;
    margin: 10px 0 0 0;
  }
`

export const StyledTextArea = styled(Field)`
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

export const SecondaryButton = styled(PrimaryButton)`
  color: #083576;
  background-color: #a8c7d8;
`

export const ErrorButton = styled(PrimaryButton)`
  opacity: 0.5;
  cursor: default;
`

export const ErrorMessage = styled.div`
  color: #ed6f95;
  margin: 8px 0 4px;
  font-size: 16px;
`
