import React from 'react'
import Thought from '../styled-components/Thought.jsx'

const ThoughtContainer = ({thought}) => (
  <Thought>
    {thought ? (
      <>
        <h2 className="thought-content">{thought.quote}</h2>
        <p className="date">{thought.date}</p>
      </>
    ) : null}
  </Thought>
)

export default ThoughtContainer
