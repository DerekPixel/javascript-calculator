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

  const handleAddition = (event) => {

    if(event !== undefined) {

      if(/(\d+)\.?(\d+)?[+\*/-]+(\d+)\.?(\d+)?/g.test(input)) {

        var nums = input.match(/(\d+)\.?(\d+)?/g)

        var firstNum = parseFloat(nums[0]);
        var secondNum = parseFloat(nums[1]);

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

    var firstNum = parseFloat(nums[0]);
    var secondNum = parseFloat(nums[1]);
    
    if(!isNaN(secondNum) && !isNaN(firstNum)) {
      switch(operation) {
        case '+':
          var sum = firstNum + secondNum;
          setResults(sum);
          setInput(`${sum}`);
          setOperation('');
          setEvaluated(true);
      }
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
        handleAddition={event => handleAddition(event)}
        handleEvalulation={() => handleEvalulation()}
        handleClear={() => handleClear()}
      />
    </div>
  );
}

export default App;
