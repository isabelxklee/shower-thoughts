import React from 'react'

const Thought = ({thought}) => (
  <section className="thought">
    {thought ? (
      <>
        <h2 className="thought-content">{thought.quote}</h2>
        <p className="date">{thought.date}</p>
      </>
    ) : null}
  </section>
)

export default Thought