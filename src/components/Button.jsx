import styled from 'styled-components'
import {variant} from 'styled-system'

const Button = styled.button`
  font-family: 'Apfel Grotezk';
  border: 2px solid black;
  border-radius: 0.2rem;
  padding: 1rem 1.4rem;
  font-size: 1.2rem;
  font-weight: 400;
  transition: 0.3s;
  cursor: pointer;

  @media only screen and (max-width: 700px) {
    margin: 0.4rem 0;
    width: 100%;
  }

  ${variant({
    variants: {
      primary: {
        backgroundColor: 'black',
        color: 'white',
        margin: '0 1rem 0 0',
        '&:hover': {
          color: 'white',
          backgroundColor: 'black',
          opacity: '0.75',
        },
      },
      inverted: {
        backgroundColor: 'white',
        color: 'black',
        margin: '0',
        '&:hover': {
          color: 'black',
          backgroundColor: 'white',
          opacity: '0.5',
        },
      },
      large: {
        fontSize: '1.6rem',
        backgroundColor: '#e8c030',
        color: 'black',
        margin: '6rem 0 0 0',
        '&:hover': {
          color: '#e8c030',
          backgroundColor: 'black',
        },
        '@media only screen and (max-width: 700px)': {
          margin: '2rem 0',
          bottom: '0',
          position: 'absolute',
        },
      },
    },
  })}
`

Button.defaultProps = {
  variant: 'primary',
}

export default Button
