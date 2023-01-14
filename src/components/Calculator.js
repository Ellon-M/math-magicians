import React, { useState } from 'react';
import calculate from '../logic/calculate';

function Calculator() {
  const [values, setValues] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (e) => {
    const buttonName = e.target.getAttribute('data-value');
    setValues((values) => calculate(values, buttonName));
  };

  return (
    <div className="container">
      <div className="calculator">
        <div className="input-container">
          <span>
            {values.total}
            {values.operation}
            {values.next}
          </span>
        </div>
        <div className="keys">
          <div className="row">
            <div className="number">
              <button data-value="AC" type="button" onClick={handleClick}>AC</button>
              <button data-value="+/-" type="button" onClick={handleClick}>+/-</button>
              <button data-value="%" type="button" onClick={handleClick}>%</button>
              <div className="symbol">
                <button data-value="x" type="button" onClick={handleClick}>x</button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="number">
              <button data-value="7" type="button" onClick={handleClick}>7</button>
              <button data-value="8" type="button" onClick={handleClick}>8</button>
              <button data-value="9" type="button" onClick={handleClick}>9</button>
              <div className="symbol">
                <button data-value="÷" type="button" onClick={handleClick}>÷</button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="number">
              <button data-value="4" type="button" onClick={handleClick}>4</button>
              <button data-value="5" type="button" onClick={handleClick}>5</button>
              <button data-value="6" type="button" onClick={handleClick}>6</button>
              <div className="symbol">
                <button data-value="-" type="button" onClick={handleClick}>-</button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="number">
              <button data-value="1" type="button" onClick={handleClick}>1</button>
              <button data-value="2" type="button" onClick={handleClick}>2</button>
              <button data-value="3" type="button" onClick={handleClick}>3</button>
              <div className="symbol">
                <button data-value="+" type="button" onClick={handleClick}>+</button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="number">
              <button data-value="0" type="button" id="button-wide" onClick={handleClick}>0</button>
              <button data-value="." type="button" onClick={handleClick}>.</button>
              <div className="symbol">
                <button data-value="=" type="button" onClick={handleClick}>=</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
