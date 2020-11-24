import React from 'react'
import Navigation from './header-styles/Navigation.jsx'
import LinkSection from './header-styles/LinkSection.jsx'
import TextLink from './header-styles/TextLink.jsx'
import Title from './header-styles/Title.jsx'

const Header = ({handleChange, toggleFormDisplay}) => (
  <Navigation>
    <Title>Shower Thoughts</Title>
    <LinkSection>
      <TextLink onClick={handleChange}>🔮 Randomize</TextLink>
      <TextLink onClick={toggleFormDisplay}>⚡️ Create new thought</TextLink>
    </LinkSection>
  </Navigation>
)

export default Header
