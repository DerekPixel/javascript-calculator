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
        if(/[-]/g.test(event.target.value)) {
          if(/[+\*/]/g.test(operation)) {
            setEvaluated(false);
            setInput(input + event.target.value);
            setPrevValue(input + event.target.value);
            setCurrentValue('-');
            // setOperation(event.target.value);
          } else {
            setEvaluated(false);
            setInput(input + event.target.value);
            setPrevValue(input + event.target.value);
            setCurrentValue('');
            setOperation(event.target.value);
          }
        } else{
          setEvaluated(false);
          setInput(input + event.target.value);
          setPrevValue(input + event.target.value);
          setCurrentValue('');
          setOperation(event.target.value);
        }
      }
    }
  }

  const handleEvalulation = (pressedEqualsButton, operationToSet = '') => {

    var firstNum = parseFloat(prevValue);
    var secondNum;

    if(operation === '-') {
      secondNum = Math.abs(parseFloat(currentValue));
    } else {
      secondNum = parseFloat(currentValue);
    }
    
    if(!isNaN(secondNum) && !isNaN(firstNum)) {
      switch(operation) {
        case '+':
          var sum = firstNum + secondNum;
          console.log(sum);
          setResults(sum);
          setInput(`${sum}${operationToSet}`);
          setPrevValue(`${sum}`);
          setCurrentValue('');
          setOperation(operationToSet);
          break;
        case '-':
          var diff = firstNum - secondNum;
          setResults(diff);
          setInput(`${diff}${operationToSet}`);
          setPrevValue(`${diff}`);
          setCurrentValue('');
          setOperation(operationToSet);
          break;
        case '/':
          var quotient = firstNum / secondNum;
          setResults(quotient);
          setInput(`${quotient}${operationToSet}`);
          setPrevValue(`${quotient}`);
          setCurrentValue('');
          setOperation(operationToSet);
          break;
        case '*':
          var product = firstNum * secondNum;
          setResults(product);
          setInput(`${product}${operationToSet}`);
          setPrevValue(`${product}`);
          setCurrentValue('');
          setOperation(operationToSet);
          break;
      }
    }

    if(pressedEqualsButton) {
      setEvaluated(true);
    }
  }

  const handleNumber = (event) => {

    if(/^(0)+/g.test(event.target.value)) {
      if(/^(0)+/g.test(currentValue)) {
        return
      } else {
        if(evaluated) {
          setEvaluated(false);
    
          setInput(event.target.value)
          setCurrentValue(event.target.value);
    
        } else {
          if(input === '0') {
            setInput(currentValue + event.target.value);
          } else {
            setInput(input + event.target.value);
          }
          setCurrentValue(currentValue + event.target.value);
        }
      }
    }

    if(/(\.)/g.test(event.target.value)) {
      if(/(\.)/g.test(currentValue)) {
        return
      } else {
        if(evaluated) {
          setEvaluated(false);
    
          setInput(event.target.value)
          setCurrentValue(event.target.value);
    
        } else {
          if(input === '0') {
            setInput(currentValue + event.target.value);
          } else {
            setInput(input + event.target.value);
          }
          setCurrentValue(currentValue + event.target.value);
        }
      }
    }
    if(evaluated) {
      setEvaluated(false);

      setInput(event.target.value)
      setCurrentValue(event.target.value);

    } else {
      if(input === '0') {
        setInput(currentValue + event.target.value);
      } else {
        setInput(input + event.target.value);
      }
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
