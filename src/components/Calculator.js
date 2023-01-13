import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick = (e) => {
    const buttonName = e.target.getAttribute('data-value');
    const initState = this.state;
    this.setState(calculate(initState, buttonName));
  };

  render() {
    const obj = this.state;
    return (
      <div className="container">
        <div className="calculator">
          <div className="input-container">
            <span>
              {obj.total}
              {obj.operation}
              {obj.next}
            </span>
          </div>
          <div className="keys">
            <div className="row">
              <div className="number">
                <button data-value="AC" type="button" onClick={this.handleClick}>AC</button>
                <button data-value="+/-" type="button" onClick={this.handleClick}>+/-</button>
                <button data-value="%" type="button" onClick={this.handleClick}>%</button>
                <div className="symbol">
                  <button data-value="x" type="button" onClick={this.handleClick}>x</button>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="number">
                <button data-value="7" type="button" onClick={this.handleClick}>7</button>
                <button data-value="8" type="button" onClick={this.handleClick}>8</button>
                <button data-value="9" type="button" onClick={this.handleClick}>9</button>
                <div className="symbol">
                  <button data-value="÷" type="button" onClick={this.handleClick}>÷</button>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="number">
                <button data-value="4" type="button" onClick={this.handleClick}>4</button>
                <button data-value="5" type="button" onClick={this.handleClick}>5</button>
                <button data-value="6" type="button" onClick={this.handleClick}>6</button>
                <div className="symbol">
                  <button data-value="-" type="button" onClick={this.handleClick}>-</button>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="number">
                <button data-value="1" type="button" onClick={this.handleClick}>1</button>
                <button data-value="2" type="button" onClick={this.handleClick}>2</button>
                <button data-value="3" type="button" onClick={this.handleClick}>3</button>
                <div className="symbol">
                  <button data-value="+" type="button" onClick={this.handleClick}>+</button>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="number">
                <button data-value="0" type="button" id="button-wide" onClick={this.handleClick}>0</button>
                <button data-value="." type="button" onClick={this.handleClick}>.</button>
                <div className="symbol">
                  <button data-value="=" type="button" onClick={this.handleClick}>=</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
