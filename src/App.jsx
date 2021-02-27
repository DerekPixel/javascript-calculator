import React, { useState } from 'react'

import './App.css';
import Buttons from './components/Buttons';
import Display from './components/Display';
import Results from './components/Results';


function App() {

  const [operation, setOperation] = useState('');
  const [input, setInput] = useState('');
  const [results, setResults] = useState('0');
  const [evaluated, setEvaluated] = useState(false);

  const handleOperations = (event) => {

    if(event !== undefined) {

      if(/(\d+)\.?(\d+)?[+\*/-]+(\d+)\.?(\d+)?/g.test(input)) {

        handleEvalulation(false, event.target.value);

      }else {
        setEvaluated(false);
        setInput(input + event.target.value);
        setOperation(event.target.value);
      }

    }

  }

  const handleEvalulation = (pressedEqualsButton, operationToSet = '') => {

    var nums = input.match(/(\d+)\.?(\d+)?/g)

    var firstNum = parseFloat(nums[0]);
    var secondNum = parseFloat(nums[1]);
    
    if(!isNaN(secondNum) && !isNaN(firstNum)) {
      switch(operation) {
        case '+':
          var sum = firstNum + secondNum;
          setResults(sum);
          setInput(`${sum}${operationToSet}`);
          setOperation(operationToSet);
          break;
        case '-':
          var diff = firstNum - secondNum;
          setResults(diff);
          setInput(`${diff}${operationToSet}`);
          setOperation(operationToSet);
          break;
      }
    }

    if(pressedEqualsButton) {
      setEvaluated(true);
    }

  }

  const handleNumber = (event) => {
    if(evaluated) {
      setEvaluated(false);

      setInput(event.target.value);

    } else {
      setInput(input + event.target.value);
    }
  }

  const handleClear = () => {
    setOperation('');
    setInput('');
    setResults('0');
  }

  return (
    <div className="App">
      <Results results={results} />
      <Display input={input} />
      <Buttons 
        handleNumber={event => handleNumber(event)} 
        handleOperations={event => handleOperations(event)}
        handleEvalulation={() => handleEvalulation(true)}
        handleClear={() => handleClear()}
      />
    </div>
  );
}

export default App;
