import React from 'react' 

function Thought(props) {
  return (
    <>
      {props.thought ? props.thought.quote : null}
    </>
  )
}

export default Thought