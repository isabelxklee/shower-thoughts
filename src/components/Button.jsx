import styled from 'styled-components'
import {variant} from 'styled-system'

const Button = styled('button')(
  {
    padding: '1rem 2rem',
    fontSize: '1.4rem',
    fontWeight: '600',
    border: 'none',
    backgroundColor: 'black',
    color: 'white',
    display: 'block'
  },

  variant({
    variants: {
      primary: {
      },
      secondary: {
      },
    }
  })
)

export default Button