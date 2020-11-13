import React, {Component} from 'react'
import Button from './Button.jsx'

class Form extends Component {
  state = {
    emoji: '',
    quote: '',
    errors: {
      emoji: '',
      quote: '',
    }
  }

  handleToggle = () => {
    this.props.toggleFormDisplay()
  }

  handleChange = (event) => {
    let errors = this.state.errors

    switch (event.target.name) {
      case 'emoji':
        errors.emoji = event.target.value.length < 1 ? '* Please pick at least one emoji!' : ''
      break

      case 'quote':
        errors.quote = event.target.value.length < 30 ? '* Your shower thought must be at least 30 characters long.' : ''
      break

      default:
      break
    }

    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = () => {
    fetch('http://localhost:3000/thoughts', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        emoji: this.state.emoji,
        quote: this.state.quote,
      }),
    })
      .then((response) => response.json())
      .then((newThought) => {
        this.props.addNewThought(newThought)
      })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} id="add-thought">
        <h3>Add a new shower thought</h3>

        <label>Emoji</label>
        <br />
        {this.state.errors.emoji.length > 0 && 
          <p id="error">{this.state.errors.emoji}</p>
        }
        <input type="text" name="emoji" autoComplete="off" onChange={this.handleChange} />

        <br />

        <label>Shower thought</label>
        <br />
        {this.state.errors.quote.length > 0 && 
          <p id="error">{this.state.errors.quote}</p>
        }
        <textarea name="quote" autoComplete="off" onChange={this.handleChange} />

        <br />

        <div className="btn-group">
          <Button type="submit" form="add-thought" variant='primary'>Add thought</Button>
          <Button variant='secondary' type="button" onClick={this.handleToggle}>Cancel</Button>
        </div>
      </form>
    )
  }
}

export default Form
