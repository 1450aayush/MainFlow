import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleNumberClick = (number) => {
    if (input === '0' && number !== '.') {
      setInput(number);
    } else {
      setInput(input + number);
    }
  };

  const handleOperationClick = (operation) => {
    if (input !== '') {
      setInput(input + operation);
    }
  };

  const handleEqualClick = () => {
    if (input !== '') {
      const result = eval(input);
      setOutput(result);
      setInput('');
    }
  };

  const handleClearClick = () => {
    setInput('');
    setOutput('');
  };

  const handleBackspaceClick = () => {
    if (input !== '') {
      setInput(input.slice(0, -1));
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <div className="input">{input}</div>
        <div className="output">{output}</div>
      </div>
      <div className="buttons">
        <button className="number" onClick={() => handleNumberClick('7')}>7</button>
        <button className="number" onClick={() => handleNumberClick('8')}>8</button>
        <button className="number" onClick={() => handleNumberClick('9')}>9</button>
        <button className="operation" onClick={() => handleOperationClick('/')}>/</button>
        <button className="number" onClick={() => handleNumberClick('4')}>4</button>
        <button className="number" onClick={() => handleNumberClick('5')}>5</button>
        <button className="number" onClick={() => handleNumberClick('6')}>6</button>
        <button className="operation" onClick={() => handleOperationClick('*')}>*</button>
        <button className="number" onClick={() => handleNumberClick('1')}>1</button>
        <button className="number" onClick={() => handleNumberClick('2')}>2</button>
        <button className="number" onClick={() => handleNumberClick('3')}>3</button>
        <button className="operation" onClick={() => handleOperationClick('-')}>-</button>
         <button className="number" onClick={() => handleNumberClick('.')}>.</button>
        <button className="number" onClick={() => handleNumberClick('0')}>0</button>
         <button className="equal" onClick={handleEqualClick}>=</button>
        <button className="operation" onClick={() => handleOperationClick('+')}>+</button>
        <button className="backspace" onClick={handleBackspaceClick}>⌫</button>
        <button  className="clear" onClick={handleClearClick}>CLEAR</button>
      </div>
    </div>
  );
};

export default Calculator;
