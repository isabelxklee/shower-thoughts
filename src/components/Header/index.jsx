import React from 'react'
import {Nav} from './styles'
import {PrimaryButton} from '../../styles'

const Header = ({handleChange, toggleFormDisplay}) => (
  <Nav>
    <PrimaryButton onClick={toggleFormDisplay}>Add thought</PrimaryButton>
    <PrimaryButton onClick={handleChange}>Randomize</PrimaryButton>
  </Nav>
)

export default Header
