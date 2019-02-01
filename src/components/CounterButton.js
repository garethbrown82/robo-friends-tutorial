import React, { Component as PureComponent } from 'react'

class CounterButton extends PureComponent {
  constructor() {
    super()
    this.state = {
      count: 0
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, nextState)
    if ( this.state.count !== nextState.count) {
      return true
    }
    return false
  }

  updateCount = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }))
  }

  render() {
    console.log('CounterButton')
    return (
      <button
        color={this.props.color}
        onClick={this.updateCount}
        id="counter"
      >
        Count: {this.state.count}
      </button>
    )
  }
}

export default CounterButton