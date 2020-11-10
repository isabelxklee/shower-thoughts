import styled from 'styled-components'
import {variant} from 'styled-system'

const Button = styled('button')(
  {
    fontFamily: 'Apfel Grotezk',
    padding: '1rem 1.4rem',
    fontSize: '1.6rem',
    fontWeight: '400',
    border: 'none',
    backgroundColor: 'black',
    color: '#E8C030',
    display: 'block',
  },

  variant({
    variants: {
      inverted: {
        backgroundColor: '#E8C030',
        color: 'black',
        border: '2px solid black',
        margin: '6rem 0 0 0'
      },
    }
  })
)

export default Button