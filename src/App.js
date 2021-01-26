import React, {Component} from 'react'
import GlobalStyle from './styled-components/GlobalStyle.jsx'
import Wrapper from './styled-components/Wrapper.jsx'
import Thought from './components/Thought.jsx'
import AddThoughtForm from './components/AddThoughtForm.jsx'
import Header from './components/Header.jsx'
import BgOverlay from './styled-components/BgOverlay.jsx'
import Title from './styled-components/Title.jsx'
import TitleTop from './styled-components/TitleTop.jsx'
import TitleBottom from './styled-components/TitleBottom.jsx'
import blob from './assets/desktop_blob.svg'

class App extends Component {
  state = {
    thoughts: [],
    selectedIndex: 0,
    displayForm: false,
  }

  async componentDidMount() {
    const response = await fetch('https://shower-thoughts-json.herokuapp.com/thoughts')
    const thoughtsArray = await response.json()
    const shuffledArray = thoughtsArray.sort(() => {
      return 0.5 - Math.random()
    })
    this.setState({thoughts: shuffledArray})
  }

  toggleFormDisplay = () => {
    // when you're updating the state based off of the previous state, it has to be in the form of a callback
    this.setState((state) => ({
      displayForm: !state.displayForm,
    }))
  }

  handleChange = () => {
    this.setState((state) => {
      // show this version first
      // then refactor to the ternary operator
      // reason: we only need 1 return, instead of 2 returns that reference the same property

      // if (state.selectedIndex < arrLength - 1) {
      //   return {
      //     selectedIndex: state.selectedIndex + 1,
      //   }
      // } else {
      //   return {
      //     selectedIndex: 0,
      //   }
      // }

      const arrLength = state.thoughts.length
      return {selectedIndex: state.selectedIndex < arrLength - 1 ? state.selectedIndex + 1 : 0}
    })
  }

  addNewThought = (newThought) => {
    this.setState((state) => ({
      thoughts: [...state.thoughts, newThought],
      displayForm: false,
    }))
  }

  render() {
    const {thoughts, selectedIndex, displayForm} = this.state

    return (
      <section className="app">
        <GlobalStyle />
        <Header handleChange={this.handleChange} toggleFormDisplay={this.toggleFormDisplay} />
        <Wrapper>
          <Title $isTop={true}>Shower</Title>
          <Title $isTop={false}>Thoughts</Title>
          {/* <TitleTop>Shower</TitleTop>
          <TitleBottom>Thoughts</TitleBottom> */}
          {/* <h1>
            <span className="title-1">Shower</span> <span className="title-2">Thoughts</span>
          </h1> */}

          {displayForm === true ? (
            <>
              <AddThoughtForm
                toggleFormDisplay={this.toggleFormDisplay}
                addNewThought={this.addNewThought}
              />
              <BgOverlay onClick={this.toggleFormDisplay} />
            </>
          ) : null}
          <Thought thought={thoughts[selectedIndex]} />
          <img src={blob} className="blob" />
        </Wrapper>
      </section>
    )
  }
}

export default App
