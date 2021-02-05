import React from 'react'
import {Thought, H2, P} from './styles'

const ThoughtContainer = ({thought}) => (
  <Thought>
    {thought ? (
      <>
        <H2>{thought.quote}</H2>
        <P>{thought.date}</P>
      </>
    ) : null}
  </Thought>
)

export default ThoughtContainer
