import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0,
         button: true
      }
    }

    reset = () => {
      this.setState(() => ({
        count: 0
      }))
    }

    display = () => {
      this.setState((prevState)=> ({
        button: prevState.button === true ? false : true
      }))
    }

    addOne = () => {
      this.setState((prevState) => ({
        count: prevState.count + 1
      }))
    }

  render() {
    return (
      <div>
        <h1>Counter: {this.state.count}</h1>
        <button onClick={() => this.display()}>button</button>
        <button onClick={() => this.addOne()}>Add one as much as you can for 5 seconds</button>
        <button onClick={() => this.reset()}>test reset button</button>
      </div>
    )
  }
}

export default Counter