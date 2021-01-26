import styled from 'styled-components'

const Title = styled.h1`
  text-transform: uppercase;
  font-weight: 900;
  font-size: 100px;
  margin: 0;
  position: fixed;
  padding: 20px;
  top: ${({$isTop}) => ($isTop ? '0' : 'unset')};
  left: ${({$isTop}) => ($isTop ? '0' : 'unset')};
  bottom: ${({$isTop}) => ($isTop ? 'unset' : '0')};
  right: ${({$isTop}) => ($isTop ? 'unset' : '0')};

  @media (max-width: 1000px) {
    font-size: 50px;
  }

  @media (max-width: 700px) {
    padding: ${({$isTop}) => ($isTop ? '20px' : '10px 20px')};
    left: ${({$isTop}) => ($isTop ? '0' : '0')};
    bottom: ${({$isTop}) => ($isTop ? 'unset' : 'unset')};
    right: ${({$isTop}) => ($isTop ? 'unset' : 'unset')};
  }
`

export default Title
