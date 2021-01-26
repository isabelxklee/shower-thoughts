import React from 'react'
import Thought from '../styled-components/Thought.jsx'

const ThoughtContainer = ({thought}) => (
  <Thought>
    {thought ? (
      <>
        <h2>{thought.quote}</h2>
        <p>{thought.date}</p>
      </>
    ) : null}
  </Thought>
)

export default ThoughtContainer
