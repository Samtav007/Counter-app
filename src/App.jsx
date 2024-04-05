import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Component } from 'react'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  reset = () => {
    this.setState({
      count: 0,
    });
  };

  render() {
    return (
      <>
      <div><h1>Counter-App</h1></div>
        <div className="count">count={this.state.count}</div>
        <button className="btn" onClick={this.increment}>
          +
        </button>
        <button className="btn" onClick={this.decrement}>
          -
        </button>
        <button className="btn" onClick={this.reset}>
          Reset
        </button>
      </>
    );
  }
}