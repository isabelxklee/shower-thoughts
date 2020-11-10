import React, {Component} from 'react'
import './App.css'
import Thought from './components/Thought.jsx'
import Button from './components/Button.jsx'
import icon from './assets/icon-add.png'

class App extends Component {
  state = {
    thoughts: [],
    selectedThought: 1,
    displayForm: false,
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

  openForm = () => {
    this.setState({
      displayForm: !this.state.displayForm
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Shower Thoughts</h1>
        <img src={icon} onClick={this.openForm} id="add-icon" alt="Icon with a plus sign"/>
        <Thought thought={this.findSelectedThought()} />
        <Button variant='inverted'>Generate another thought</Button>
      </div>
    )
  }
}

export default App