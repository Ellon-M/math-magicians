import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <div className="calculator">
          <div className="input-container">
            <span>121</span>
          </div>
          <div className="keys">
            <div className="row">
              <div className="number">
                <span>AC</span>
                <span>+/-</span>
                <span>%</span>
                <div className="symbol">
                  <span>x</span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="number">
                <span>7</span>
                <span>8</span>
                <span>9</span>
                <div className="symbol">
                  <span>÷</span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="number">
                <span>4</span>
                <span>5</span>
                <span>6</span>
                <div className="symbol">
                  <span>-</span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="number">
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <div className="symbol">
                  <span>+</span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="number">
                <span id="span-wide">0</span>
                <span>.</span>
                <div className="symbol">
                  <span>=</span>
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
