import React from 'react' 

function Thought(props) {
  return (
    <div id="thought">
      <h2>{props.thought ? props.thought.quote : null}</h2>
    </div>
  )
}

export default Thought