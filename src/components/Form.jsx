import React, {Component} from 'react' 

class Form extends Component {
  render() {
    return(
      <form>
        <h3>Add a new shower thought</h3>

        <label>
          Quote
          <br />
          <input type="text" name="quote" />
        </label>

        <br />
        <input type="submit" value="Create thought" />
      </form>
    )
  }
}

export default Form