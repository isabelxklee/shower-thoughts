import styled from 'styled-components'
import {variant} from 'styled-system'

const Button = styled.button`
  font-family: 'Apfel Grotezk';
  background-color: black;
  color: white;
  margin: 0 1rem 0 0;
  border: 2px solid black;
  border-radius: 0.2rem;
  padding: 1rem 1.4rem;
  font-size: 1.2rem;
  font-weight: 400;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }

  @media only screen and (max-width: 700px) {
    margin: 0.4rem 0;
    width: 100%;
  }

  ${variant({
    variants: {
      inverted: {
        backgroundColor: 'white',
        color: 'black',
      },
      large: {
        fontSize: '1.6rem',
        backgroundColor: '#e8c030',
        color: 'black',
        marginTop: '4rem',
        '&:hover': {
          color: '#e8c030',
          backgroundColor: 'black',
          opacity: '1',
        },
        '@media only screen and (max-width: 700px)': {
          right: '25%',
          width: '50%',
          bottom: '5',
          position: 'fixed',
        },
      },
    },
  })}
`

export default Button
