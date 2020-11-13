import styled from 'styled-components'
import {variant} from 'styled-system'

const Button = styled('button')(
  {
    fontFamily: 'Apfel Grotezk',
    padding: '1rem 1.4rem',
    fontSize: '1.6rem',
    fontWeight: '400',
    backgroundColor: '#E8C030',
    color: 'black',
    border: '2px solid black',
    borderRadius: '0.2rem',
    transition: '0.3s',
    margin: '6rem 0 0 0',
    cursor: 'pointer',
    '@media only screen and (max-width: 700px)': {
      margin: '2rem 0',
    },
    '&:hover': {
      color: '#e8c030',
      backgroundColor: 'black',
    },
  },

  variant({
    variants: {
      primary: {
        backgroundColor: 'black',
        color: 'white',
        border: '2px solid black',
        margin: '0 1rem 0 0',
        fontSize: '1.2rem',
        '&:hover': {
          color: 'white',
          backgroundColor: 'black',
          opacity: '0.75',
        },
      },
      secondary: {
        backgroundColor: 'white',
        color: 'black',
        border: '2px solid black',
        margin: '0',
        fontSize: '1.2rem',
        '&:hover': {
          color: 'black',
          backgroundColor: 'white',
          opacity: '0.5',
        },
      },
    },
  })
)

export default Button
