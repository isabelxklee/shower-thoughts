import React from 'react'

function Thought(props) {
  return (
    <>
      <h2 id="thought">
        {props.thought ? props.thought.emoji : null} {props.thought ? props.thought.quote : null}
      </h2>
    </>
  )
}

export default Thought
