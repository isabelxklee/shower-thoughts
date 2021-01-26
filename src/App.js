import React, {Component} from 'react'
import GlobalStyle from './styled-components/GlobalStyle.jsx'
import Wrapper from './styled-components/Wrapper.jsx'
import ThoughtContainer from './components/ThoughtContainer.jsx'
import AddThoughtForm from './components/AddThoughtForm.jsx'
import Header from './components/Header.jsx'
import BgOverlay from './styled-components/BgOverlay.jsx'
import Title from './styled-components/Title.jsx'
import Blob from './styled-components/Blob.jsx'
import blobImage from './assets/desktop_blob.svg'

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
    const {thoughts} = this.state
    const newArray = [...thoughts, newThought]
    const shuffledArray = newArray.sort(() => {
      return 0.5 - Math.random()
    })

    this.setState({
      thoughts: shuffledArray,
      displayForm: false,
    })
  }

  render() {
    const {thoughts, selectedIndex, displayForm} = this.state
    console.log(thoughts)

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
          <ThoughtContainer thought={thoughts[selectedIndex]} />
          <Blob src={blobImage} />
        </Wrapper>
      </section>
    )
  }
}

export default App
