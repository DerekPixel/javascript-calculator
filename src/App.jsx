import React, { useState } from 'react'

import './App.css';
import Buttons from './components/Buttons';
import Display from './components/Display';
import Results from './components/Results';


function App() {

  const [previousStoredValue, setPreviousStoredValue] = useState('');
  const [storedValue, setStoredValue] = useState('');
  const [operation, setOperation] = useState('');
  const [input, setInput] = useState('');
  const [results, setResults] = useState('0');

  const handleAddition = (event) => {

    if(event !== undefined) {

      if(/(\d+)\.?(\d+)?[+\*/-]+(\d+)\.?(\d+)?/g.test(input)) {

        var nums = input.match(/(\d+)\.?(\d+)?/g)

        var firstNum = parseInt(nums[0], 10);
        var secondNum = parseInt(nums[1], 10);

        switch(operation) {
          case '+':
            var sum = firstNum + secondNum;
            setResults(sum);
            setInput(`${sum}+`);
            setOperation('+');
            break;
        }
      }else {
        setInput(input + event.target.value);
        setOperation('+');
      }

    }

  }

  const handleEvalulation = () => {

    var nums = input.match(/(\d+)\.?(\d+)?/g)

    var firstNum = parseInt(nums[0], 10);
    var secondNum = parseInt(nums[1], 10);
    
    if(!isNaN(secondNum) && !isNaN(firstNum)) {
      switch(operation) {
        case '+':
          var sum = firstNum + secondNum;
          setResults(sum);
          setInput(`${sum}`);
          setOperation('');
      }
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
        handleNumber={event => setInput(input + event.target.value)} 
        handleAddition={event => handleAddition(event)}
        handleEvalulation={() => handleEvalulation()}
        handleClear={() => handleClear()}
      />
    </div>
  );
}

export default App;
