import styled from 'styled-components'

const Title = styled.h1`
  text-transform: uppercase;
  font-weight: 900;
  font-size: 100px;
  margin: 0;
  position: fixed;
  padding: 20px;

  @media (max-width: 1000px) {
    font-size: 50px;
  }
`

export const TitleTop = styled(Title)`
  left: 0;
  top: 0;

  @media (max-width: 700px) {
    padding: 20px;
  }
`

export const TitleBottom = styled(Title)`
  right: 0;
  bottom: 0;

  @media (max-width: 700px) {
    padding: 10px 20px;
    left: 0;
    right: unset;
    bottom: unset;
  }
`
