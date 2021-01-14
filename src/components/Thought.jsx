import React from 'react'

const Thought = ({thought}) => (
  <section id="thought">
    {thought ? (
      <>
        <h2 className="thought">{thought.quote}</h2>
        <p className="date">{thought.date}</p>
      </>
    ) : null}
  </section>
)

export default Thought