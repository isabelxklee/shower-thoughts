import React, {Component} from 'react'
import './App.css'
import Thought from './components/Thought.jsx'
import Button from './components/Button.jsx'
import Form from './components/Form.jsx'
import icon from './assets/icon-add.png'

class App extends Component {
  state = {
    thoughts: [],
    selectedIndex: 0,
    displayForm: false,
  }

  componentDidMount() {
    fetch("http://localhost:3000/thoughts")
    .then(response => response.json())
    .then((thoughtsArray) => {
      let shuffledArray = thoughtsArray.sort(() => {
        return 0.5 - Math.random()
      })
  
      this.setState({
        thoughts: shuffledArray
      })
    })
  }

  toggleFormDisplay = () => {
    this.setState({
      displayForm: !this.state.displayForm
    })
  }

  handleChange = () => {
    let arrLength = this.state.thoughts.length

    if (this.state.selectedIndex < arrLength - 1) {
      console.log(this.state.selectedIndex)
      this.setState({
        selectedIndex: this.state.selectedIndex + 1
      })
    } else {
      this.setState({
        selectedIndex: 1
      })
    }
  }

  addNewThought = (newThought) => {
    this.setState({
      thoughts: [...this.state.thoughts, newThought]
    })
  }

  render() {
    let {thoughts, selectedIndex, displayForm} = this.state

    return (
      <div className="App">
        {displayForm === true
        ?
          <>
            <Form icon={icon} toggleFormDisplay={this.toggleFormDisplay} addNewThought={this.addNewThought}/>
            <div id="overlay" onClick={this.toggleFormDisplay}/>
          </>
        :
          null
        }
        
        <h1>Shower Thoughts</h1>
        <img src={icon} onClick={this.toggleFormDisplay} className="icon" id="add" alt="Icon with a plus sign"/>
        <Button variant='inverted' onClick={this.handleChange}>Generate a thought</Button>
        <Thought thought={thoughts[selectedIndex]} />
      </div>
    )
  }
}

export default App