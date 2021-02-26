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
  const [results, setResults] = useState('');

  const handleAddition = (event) => {

    if(event !== undefined) {
      setInput(input + event.target.value);
      setOperation('+');
    }

  }

  const handleEvalulation = () => {

    var nums = input.match(/(\d+)\.?(\d+)?/g)

    var firstNum = parseInt(nums[0], 10);
    var secondNum = parseInt(nums[1], 10);

    switch(operation) {
      case '+':
        setResults(firstNum + secondNum);
        setInput(firstNum + secondNum);
        setOperation('');
    }
  }

  const handleClear = () => {
    setOperation('');
    setInput('');
    setResults('');
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
