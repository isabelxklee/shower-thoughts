import styled from 'styled-components'

const P = styled.p`
  margin: 0;
  font-size: 16px;
  color: ${({$isLight}) => ($isLight ? '#FFF' : '#083576')};
`

export default P
