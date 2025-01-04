import React, { Component } from 'react'

class ClassCounter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
    }

    clickIncrement = () => {
        this.setState( (prevState) => ({
            count:prevState.count+1
        }))
    }

    clickDecrement = () => {
        this.setState((prevState) => ({
            count:prevState.count - 1
        }))
    }

  render() {
    const {count} = this.state
    return (
      <div>
        <h1>Count - {count}</h1> 
        <button onClick={this.clickIncrement}>Increment</button>
        <button onClick={this.clickDecrement}>Decrement</button>
      </div>
    )
  }
}

export default ClassCounter