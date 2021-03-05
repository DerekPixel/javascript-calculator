import React, { useState } from 'react'

import './App.css';
import Buttons from './components/Buttons';
import Display from './components/Display';
import Results from './components/Results';

//3 + 5 * 6 - 2 / 4 = 32.5 or 11.5

function App() {

  const [currentValue, setCurrentValue] = useState('')
  const [prevValue, setPrevValue] = useState('')

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
        setPrevValue(currentValue);
        setCurrentValue('');
        setOperation(event.target.value);
      }

    }

  }

  const handleEvalulation = (pressedEqualsButton, operationToSet = '') => {

    // var nums = input.match(/-?(\d+)\.?(\d+)?/g)

    // var firstNum = parseFloat(nums[0]);
    // var secondNum = Math.abs(parseFloat(nums[1]));

    var firstNum = parseFloat(prevValue);
    var secondNum = Math.abs(parseFloat(currentValue));

    console.log(firstNum, secondNum);
    
    if(!isNaN(secondNum) && !isNaN(firstNum)) {
      switch(operation) {
        case '+':
          var sum = firstNum + secondNum;
          setResults(sum);
          setInput(`${sum}${operationToSet}`);
          setPrevValue(`${sum}${operationToSet}`);
          setOperation(operationToSet);
          break;
        case '-':
          var diff = firstNum - secondNum;
          setResults(diff);
          setInput(`${diff}${operationToSet}`);
          setPrevValue(`${diff}${operationToSet}`);
          setOperation(operationToSet);
          break;
        case '/':
          var quotient = firstNum / secondNum;
          setResults(quotient);
          setInput(`${quotient}${operationToSet}`);
          setPrevValue(`${quotient}${operationToSet}`);
          setOperation(operationToSet);
          break;
        case '*':
          var product = firstNum * secondNum;
          setResults(product);
          setInput(`${product}${operationToSet}`);
          setPrevValue(`${product}${operationToSet}`);
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

      setInput(event.target.value)
      setCurrentValue(event.target.value);

    } else {
      setInput(input + event.target.value);
      setCurrentValue(currentValue + event.target.value);
    }
  }

  const handleClear = () => {
    setPrevValue('');
    setCurrentValue('');
    setOperation('');
    setInput('0');
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
