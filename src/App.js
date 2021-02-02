import React, {Component} from 'react'
import GlobalStyle from './styled-components/GlobalStyle.jsx'
import Wrapper from './styled-components/Wrapper.jsx'
import ThoughtContainer from './components/ThoughtContainer.jsx'
import AddThoughtForm from './components/AddThoughtForm.jsx'
import Header from './components/Header.jsx'
import BgOverlay from './styled-components/BgOverlay.jsx'
import TitleTop from './styled-components/TitleTop.jsx'
import TitleBottom from './styled-components/TitleBottom.jsx'
import ThoughtNavigation from './styled-components/ThoughtNavigation.jsx'
import PrimaryButton from './styled-components/PrimaryButton.jsx'
import Counter from './styled-components/Counter.jsx'
import Blob from './styled-components/Blob.jsx'
import blobImage from './assets/desktop_blob.svg'

class App extends Component {
  state = {
    thoughts: [],
    selectedIndex: 0,
    displayForm: false,
  }

  async componentDidMount() {
    const response = await fetch('https://superhi-shower-thoughts.herokuapp.com/thoughts')
    const thoughtsArray = await response.json()
    this.setState({thoughts: thoughtsArray})
  }

  toggleFormDisplay = () => {
    this.setState((state) => ({
      displayForm: !state.displayForm,
    }))
  }

  nextThought = () => {
    this.setState((state) => {
      const arrLength = state.thoughts.length - 1
      return {
        selectedIndex: state.selectedIndex < arrLength ? state.selectedIndex + 1 : 0,
      }
    })
  }

  previousThought = () => {
    this.setState((state) => {
      const arrLength = state.thoughts.length - 1
      return {
        selectedIndex: state.selectedIndex > 0 ? state.selectedIndex - 1 : arrLength,
      }
    })
  }

  addNewThought = (newThought) => {
    this.setState((state) => ({
      thoughts: [...state.places, newThought],
      displayForm: false,
    }))
  }

  render() {
    const {thoughts, selectedIndex, displayForm} = this.state

    return (
      <div>
        <GlobalStyle />
        <Header handleChange={this.handleChange} toggleFormDisplay={this.toggleFormDisplay} />
        <Wrapper>
          <TitleTop>Shower</TitleTop>
          <TitleBottom>Thoughts</TitleBottom>

          <ThoughtNavigation>
            <PrimaryButton onClick={this.previousThought}>Back</PrimaryButton>
            <PrimaryButton onClick={this.nextThought}>Next</PrimaryButton>
            <Counter>
              {selectedIndex + 1} / {thoughts.length}
            </Counter>
          </ThoughtNavigation>

          {displayForm === true ? (
            <>
              <AddThoughtForm
                toggleFormDisplay={this.toggleFormDisplay}
                addNewThought={this.addNewThought}
              />
              <BgOverlay onClick={this.toggleFormDisplay} />
            </>
          ) : null}
          <ThoughtContainer thought={thoughts[selectedIndex]} />
          <Blob src={blobImage} />
        </Wrapper>
      </div>
    )
  }
}

export default App
