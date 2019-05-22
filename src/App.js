import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      fact: "",
      val: "",
      number: [
        { id: 0 },
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
        { id: 7 },
        { id: 8 },
        { id: 9 }
      ]
    };
  }
  renderButtons = () =>
    this.state.number.map(item => (
      <button value={item.id} name={item.id} onClick={this.calcul}>
        {item.id}
      </button>
    ));

  calcul = ev => {
    this.setState({
      fact: this.factorial(ev.currentTarget.value),
      val: ev.currentTarget.value
    });
  };

  factorial = n => {
    if (n <= 1) {
      return 1;
    }
    return n * this.factorial(n - 1);
  };

  render() {
    return (
      <div className="App">
        {this.renderButtons()}
        <p>
          The factorial of {this.state.val} is {this.state.fact}
        </p>
      </div>
    );
  }
}

export default App;
