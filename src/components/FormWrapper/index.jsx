import React from 'react'
import AddThoughtForm from '../AddThoughtForm'
import {BgOverlay} from './styles'

const FormWrapper = ({toggleFormDisplay, addNewThought}) => (
  <>
    <AddThoughtForm toggleFormDisplay={toggleFormDisplay} addNewThought={addNewThought} />
    <BgOverlay onClick={toggleFormDisplay} />
  </>
)

export default FormWrapper
