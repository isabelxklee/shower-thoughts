import styled from 'styled-components'
import {ReactComponent as BlobSVG} from '../assets/desktop_blob.svg'

const Blob = styled(BlobSVG)`
  top: 50%;
  left: 50%;
  position: fixed;
  transform: translate(-46%, -54%);
  width: 75%;
  z-index: -10;

  @media (max-width: 1000px) {
    width: 125%;
  }

  @media (max-width: 700px) {
    width: 150%;
  }

  @media (max-width: 500px) {
    width: 200%;
  }
`

export default Blob
