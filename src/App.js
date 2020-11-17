import React, {Component} from 'react'
import './App.css'
import Thought from './components/Thought.jsx'
import Button from './components/Button.jsx'
import Form from './components/AddThoughtForm.jsx'
import icon from './assets/icon-add.png'

class App extends Component {
  state = {
    thoughts: [],
    selectedIndex: 0,
    displayForm: false,
  }

  componentDidMount() {
    fetch('http://localhost:3000/thoughts')
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

      // then refactor to the ternary operator
      // reason: we only need 1 return, instead of 2 returns that reference the same property
      return {selectedIndex: state.selectedIndex < arrLength - 1 ? state.selectedIndex + 1 : 0}

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
      <div className="App">
        {displayForm === true ? (
          <>
            <Form
              icon={icon}
              toggleFormDisplay={this.toggleFormDisplay}
              addNewThought={this.addNewThought}
            />
            <div id="overlay" onClick={this.toggleFormDisplay} />
          </>
        ) : null}

        <h1>Shower Thoughts</h1>
        <i className="fa fa-plus-circle" onClick={this.toggleFormDisplay} />
        <Button onClick={this.handleChange} variant="large">
          Randomize
        </Button>
        <Thought thought={thoughts[selectedIndex]} />
      </div>
    )
  }
}

export default App
