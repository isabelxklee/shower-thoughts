import styled from 'styled-components'
import Title from './Title.jsx'

const TitleBottom = styled(Title)`
  right: 0;
  bottom: 0;

  @media (max-width: 700px) {
    padding: 10px 20px;
    left: 0;
    right: unset;
    bottom: unset;
  }
`

export default TitleBottom
