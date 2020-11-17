import React from 'react'

const Thought = ({thought}) => (
  <section id="thought">
    {thought ? (
      <h2>
        {thought.emoji} {thought.quote}
      </h2>
    ) : null}
  </section>
)

export default Thought
