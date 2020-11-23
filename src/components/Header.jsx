import React from 'react'
import styled from 'styled-components'

const Navigation = styled.header`
  background-color: black;
  top: 0;
  height: 4rem;
  margin: auto;
  padding: 1rem 3rem;

  @media only screen and (max-width: 700px) {
    height: auto;
    padding: 1rem 2rem;
  }
`

const Links = styled.section`
  float: right;
  display: inline-flex;

  @media only screen and (max-width: 700px) {
    float: none;
    display: grid;
    grid-row-gap: 0.4rem;
  }
`

const Title = styled.h1`
  float: left;
  color: white;
  margin: 1rem;

  @media only screen and (max-width: 700px) {
    float: none;
    margin: 1rem 0;
  }
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

  @media only screen and (max-width: 700px) {
    margin: 0 0 0.6rem 0;
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
