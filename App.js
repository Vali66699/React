import React, { useState } from 'react';

 const App = () => {
 const [calc, setCalc] = useState('');
 const [result, setResult] = useState('');

 const ops = ['/', '*', '+', '-'];

 const updateCalc = (value) => {
    if (
      (ops.includes(value) && calc === '') ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }

    setCalc(calc + value);

    if (!ops.includes(value)) {
      // eslint-disable-next-line no-eval
      setResult(eval(calc + value).toString());
    }
 };

 const createDigits = () => {
    const digits = [];

    for (let i = 1; i <= 10; i++) {
      const nr = i % 10;
      digits.push(
        <button onClick={() => updateCalc(nr.toString())} key={nr}>
          {nr}
        </button>
      );
    }

    return digits;
 };

 const calculate = () => {
    // eslint-disable-next-line no-eval
    setCalc(eval(calc).toString());
 };

 const deleteLast = () => {
    if (calc === '') {
      return;
    }

    const value = calc.slice(0, -1);

    setCalc(value);
 };

 return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          {result ? <span>({result})</span> : ''} &nbsp;{calc || '0'}
        </div>

        <div className="operators">
          {ops.map((op) => (
            <button onClick={() => updateCalc(op)} key={op}>
              {op}
            </button>
          ))}

          <button onClick={deleteLast}>DEL</button>
        </div>

        <div className="digits">
          {createDigits()}
          {/* <button onClick={() => updateCalc('0')}>0</button> */}
          <button onClick={() => updateCalc('.')}>.</button>

          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
 );
};

export default App;