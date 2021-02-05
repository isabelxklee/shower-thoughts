import React, {Component} from 'react'
import Header from './components/Header'
import Title from './components/Title'
import ThoughtContainer from './components/ThoughtContainer'
import FormWrapper from './components/FormWrapper'
import {GlobalStyle, Wrapper, Blob} from './styles'

class App extends Component {
  state = {
    thoughts: [],
    selectedIndex: 0,
    displayForm: false,
  }

  shuffleArray = (array) => array.sort(() => 0.5 - Math.random())

  async componentDidMount() {
    const response = await fetch('https://superhi-shower-thoughts.herokuapp.com/thoughts')
    const thoughtsArray = await response.json()
    const shuffledArray = this.shuffleArray(thoughtsArray)
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
    this.setState(({thoughts}) => {
      const newThoughts = [...thoughts, newThought]
      const shuffledArray = this.shuffleArray(newThoughts)
      return {
        thoughts: shuffledArray,
        displayForm: false,
      }
    })
  }

  render() {
    const {thoughts, selectedIndex, displayForm} = this.state

    return (
      <>
        <GlobalStyle />
        <Header handleChange={this.handleChange} toggleFormDisplay={this.toggleFormDisplay} />
        <Wrapper>
          <Title />
          {displayForm ? (
            <FormWrapper
              toggleFormDisplay={this.toggleFormDisplay}
              addNewThought={this.addNewThought}
            />
          ) : null}
          <ThoughtContainer thought={thoughts[selectedIndex]} />
          <Blob />
        </Wrapper>
      </>
    )
  }
}

export default App
