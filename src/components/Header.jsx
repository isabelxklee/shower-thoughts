import React from 'react'
import styled from 'styled-components'

const Navigation = styled.header`
  background-color: black;
  top: 0;
  height: 4rem;
  margin: auto;
  padding: 1rem 3rem;
`

const Links = styled.section`
  float: right;
  display: inline-flex;
`

const Title = styled.h1`
  float: left;
  color: white;
  margin: 1rem;
`

const TextLink = styled.a`
  color: white;
  font-family: 'Apfel Grotezk';
  font-size: 1.2rem;
  font-weight: 400;
  transition: 0.3s;
  margin: 1rem;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`

const Header = ({handleChange, toggleFormDisplay}) => (
  <Navigation>
    <Title>Shower Thoughts</Title>
    <Links>
      <TextLink onClick={handleChange}>🔮 Randomize</TextLink>
      <TextLink onClick={toggleFormDisplay}>⚡️ Create new thought</TextLink>
    </Links>
  </Navigation>
)

export default Header
