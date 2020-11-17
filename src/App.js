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
        let shuffledArray = thoughtsArray.sort(() => {
          return 0.5 - Math.random()
        })

        this.setState({
          thoughts: shuffledArray,
        })
      })
  }

  toggleFormDisplay = () => {
    // good
    // when you're updating the state based off of the previous state, it has to be in the form of a callback
    this.setState((state) => ({
      displayForm: !state.displayForm,
    }))

    // bad
    // this.setState({
    //   displayForm: !this.state.displayForm,
    // })
  }

  handleChange = () => {
    this.setState((state) => {
      const arrLength = state.thoughts.length

      if (state.selectedIndex < arrLength - 1) {
        return {
          selectedIndex: state.selectedIndex + 1,
        }
      } else {
        return {
          selectedIndex: 1,
        }
      }
    })
  }

  addNewThought = (newThought) => {
    this.setState({
      thoughts: [...this.state.thoughts, newThought],
    })
  }

  render() {
    let {thoughts, selectedIndex, displayForm} = this.state

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
        <Button onClick={this.handleChange}>Randomize</Button>
        <Thought thought={thoughts[selectedIndex]} />
      </div>
    )
  }
}

export default App
