import styled from 'styled-components'

export const Thought = styled.div`
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

export const H2 = styled.h2`
  font-size: 28px;
  font-weight: 400;

  @media (max-width: 1000px) {
    font-size: 24px;
  }
`

export const P = styled.p`
  margin: 0;
  font-size: 16px;
`
