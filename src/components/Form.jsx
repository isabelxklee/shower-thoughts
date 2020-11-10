import React, {Component} from 'react'

class Form extends Component {
  state = {
    emoji: "",
    quote: ""
  }

  handleToggle = () => {
    this.props.toggleFormDisplay()
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    fetch("http://localhost:3000/thoughts", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        emoji: this.state.emoji,
        quote: this.state.quote
      })
    })
    .then(response => response.json())
    .then((newThought) => {
      this.props.addNewThought(newThought)
    })
  }

  render() {
    console.log(this.state)
    return(
      <form onSubmit={this.handleSubmit}>
        <img src={this.props.icon} onClick={this.handleToggle} className="icon" id="close" alt="Icon with an x shape"/>

        <h3>Add a new shower thought</h3>

        <label>
          Emoji
          <br />
          <input type="text" name="emoji" autoComplete="off" onChange={this.handleChange}/>
        </label>

        <br />

        <label>
          Quote
          <br />
          <textarea name="quote" autoComplete="off" onChange={this.handleChange}/>
        </label>

        <br />
        <input type="submit" value="Add thought" />
      </form>
    )
  }
}

export default Form