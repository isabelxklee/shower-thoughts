import React from 'react'
import Navigation from './header-styles/Navigation.jsx'
import PrimaryButton from './PrimaryButton.jsx'

const Header = ({handleChange, toggleFormDisplay}) => (
  <Navigation>
    <PrimaryButton onClick={toggleFormDisplay}>Add thought</PrimaryButton>
    <PrimaryButton onClick={handleChange}>Randomize</PrimaryButton>
  </Navigation>
)

export default Header
