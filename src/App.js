import React, {Component} from 'react'
import './App.css'
import Thought from './components/Thought.jsx'
import Button from './components/Button.jsx'

class App extends Component {
  state = {
    thoughts: [],
    selectedThought: 0
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

  render() {
    return (
      <div className="App">
        <h1>Shower Thoughts</h1>
        <Thought thought={this.state.selectedThought} />
        <Button>Generate another thought</Button>
      </div>
    )
  }
}

export default App