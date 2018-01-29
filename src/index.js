import React from 'react';
import ReactDOM from 'react-dom';

class Reverser extends React.Component {
  constructor() {
    super();
    this.state = {
      userInput: ''
    }
  }

  handleInput = (e) => {
    const input = e.target.value
    this.setState({
      userInputReversed: input.split('').reverse().join('')
    })
  }

  render() {
    return (
      <div>
        <input onChange={this.handleInput} />
        <p >Your input reversed: {this.state.userInputReversed}</p>
      </div>
    )
  }
}

ReactDOM.render(
  <Reverser /> ,
  document.getElementById('root')
)