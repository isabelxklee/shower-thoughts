import React from 'react'
import Navigation from '../styled-components/Navigation.jsx'
import PrimaryButton from '../styled-components/PrimaryButton.jsx'

const Header = ({toggleFormDisplay}) => (
  <Navigation>
    <PrimaryButton onClick={toggleFormDisplay}>Add thought</PrimaryButton>
  </Navigation>
)

export default Header
