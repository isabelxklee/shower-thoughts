import React from 'react'
import Thought from '../styled-components/Thought.jsx'
import H2 from '../styled-components/H2.jsx'
import P from '../styled-components/P.jsx'

const ThoughtContainer = ({thought}) => (
  <Thought>
    {thought ? (
      <>
        <P $isLight={true}>{thought.date}</P>
        <H2>{thought.quote}</H2>
      </>
    ) : null}
  </Thought>
)

export default ThoughtContainer
