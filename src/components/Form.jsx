import React, {Component} from 'react'

class Form extends Component {
  handleChange = () => {
    this.props.toggleFormDisplay()
  }

  render() {
    return(
      <form>
        <img src={this.props.icon} onClick={this.handleChange} className="icon" id="close" alt="Icon with an x shape"/>
        <h3>Add a new shower thought</h3>

        <label>
          Emoji
          <br />
          <input type="text" name="emoji" autoComplete="off"/>
        </label>

        <br />

        <label>
          Quote
          <br />
          <textarea name="quote" autoComplete="off"/>
        </label>

        <br />
        <input type="submit" value="Add thought" />
      </form>
    )
  }
}

export default Form