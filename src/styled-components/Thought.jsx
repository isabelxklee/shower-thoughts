import styled from 'styled-components'

const Thought = styled.div`
  top: 50%;
  left: 50%;
  position: fixed;
  transform: translate(-46%, -54%);
  width: 35%;
  color: #fff;

  @media (max-width: 700px) {
    width: 80%;
  }
`

export default Thought
