import './index.css'
import {Component} from 'react'

class RandomNumberGenerator extends Component {
  state = {randomNumber: 0}

  generate = () => {
    const generatedRandomNum = Math.ceil(Math.random() * 100)
    //  console.log(generatedRandomNum)
    return this.setState({randomNumber: generatedRandomNum})
  }

  render() {
    const {randomNumber} = this.state
    return (
      <div>
        <div className="elements-container">
          <h2>Random Number</h2>
          <p>Generate a random number in the range of 0 to 100</p>
          <button onClick={this.generate} type="button">
            Generate
          </button>
          <p className="random-number">{randomNumber}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
