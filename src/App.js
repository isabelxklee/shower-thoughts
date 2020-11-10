import React, {Component} from 'react'
import './App.css'
import Thought from './components/Thought.jsx'
import Button from './components/Button.jsx'

class App extends Component {
  state = {
    thoughts: [],
    selectedThought: 1
  }

  componentDidMount() {
    fetch("http://localhost:3000/thoughts")
    .then(response => response.json())
    .then((thoughtsArray) => {
      this.setState({
        thoughts: thoughtsArray
      })
    })
  }

  findSelectedThought = () => {
    let {thoughts, selectedThought} = this.state

    if (selectedThought === 0) {
      return thoughts
    } else {
      return thoughts.find((thought) => {
        return thought.id === this.state.selectedThought
      })
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Shower Thoughts</h1>
        <Thought thought={this.findSelectedThought()} />
        <Button>Generate another thought</Button>
      </div>
    )
  }
}

export default App