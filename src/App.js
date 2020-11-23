import React, {Component} from 'react'
import './App.css'
import Wrapper from './components/Wrapper.jsx'
import Thought from './components/Thought.jsx'
import Form from './components/AddThoughtForm.jsx'
import Header from './components/Header.jsx'

class App extends Component {
  state = {
    thoughts: [],
    selectedIndex: 0,
    displayForm: false,
  }

  componentDidMount() {
    fetch('https://shower-thoughts-json.herokuapp.com/thoughts')
      .then((response) => response.json())
      .then((thoughtsArray) => {
        const shuffledArray = thoughtsArray.sort(() => {
          return 0.5 - Math.random()
        })

        this.setState({
          thoughts: shuffledArray,
        })
      })
  }

  toggleFormDisplay = () => {
    // when you're updating the state based off of the previous state, it has to be in the form of a callback
    this.setState((state) => ({
      displayForm: !state.displayForm,
    }))
  }

  handleChange = () => {
    this.setState((state) => {
      const arrLength = state.thoughts.length

      // show this version first

      // if (state.selectedIndex < arrLength - 1) {
      //   return {
      //     selectedIndex: state.selectedIndex + 1,
      //   }
      // } else {
      //   return {
      //     selectedIndex: 0,
      //   }
      // }

      // then refactor to the ternary operator
      // reason: we only need 1 return, instead of 2 returns that reference the same property
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
        <Header handleChange={this.handleChange} toggleFormDisplay={this.toggleFormDisplay} />
        <Wrapper>
          {displayForm === true ? (
            <>
              <Form toggleFormDisplay={this.toggleFormDisplay} addNewThought={this.addNewThought} />
              <section className="overlay" onClick={this.toggleFormDisplay} />
            </>
          ) : null}
          <Thought thought={thoughts[selectedIndex]} />
        </Wrapper>
      </section>
    )
  }
}

export default App
