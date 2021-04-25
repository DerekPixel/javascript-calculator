
const Buttons = ({handleNumber, handleOperations, handleEvalulation, handleClear}) => {

  const buttonProps = [
    {
      content: 'AC',
      id: 'clear'
    },
    {
      content: '/',
      id: 'divide'
    },
    {
      content: 'X',
      id: 'multiply'
    },
    {
      content: 7,
      id: 'seven'
    },
    {
      content: 8,
      id: 'eight'
    },
    {
      content: 9,
      id: 'nine'
    },
    {
      content: '-',
      id: 'subtract'
    },
    {
      content: 4,
      id: 'four'
    },
    {
      content: 5,
      id: 'five'
    },
    {
      content: 6,
      id: 'six'
    },
    {
      content: '+',
      id: 'add'
    },
    {
      content: 1,
      id: 'one'
    },
    {
      content: 2,
      id: 'two'
    },
    {
      content: 3,
      id: 'three'
    },
    {
      content: '=',
      id: 'equals'
    },
    {
      content: 0,
      id: 'zero'
    },
    {
      content: '.',
      id: 'decimal'
    },
  ]

  // const elements = buttonProps.map((propObj) => {
  //   return (
  //     <button
  //     key={propObj.id}
  //     id={propObj.id}
  //     value={propObj.content}
  //     onClick={onClick}
  //     >
  //       {propObj.content}
  //     </button>
  //   )
  // })

  return (
    <div className='calculator-buttons-container' >
      <button
        className='function-btn'
        id='divide'
        value='/'
        onClick={handleOperations}
      >
        /
      </button>
      <button
        className='function-btn'
        id='multiply'
        value='*'
        onClick={handleOperations}
      >
        X
      </button>
      <button
        className='number-btn'
        id='seven'
        value={7}
        onClick={handleNumber}
      >
        7
      </button>
      <button
        className='number-btn'
        id='eight'
        value={8}
        onClick={handleNumber}
      >
        8
      </button>
      <button
        className='number-btn'
        id='nine'
        value={9}
        onClick={handleNumber}
      >
        9
      </button>
      <button
        className='function-btn'
        id='add'
        value='+'
        onClick={handleOperations}
      >
        +
      </button>
      <button
        className='number-btn'
        id='four'
        value={4}
        onClick={handleNumber}
      >
        4
      </button>
      <button
        className='number-btn'
        id='five'
        value={5}
        onClick={handleNumber}
      >
        5
      </button>
      <button
        className='number-btn'
        id='six'
        value={6}
        onClick={handleNumber}
      >
        6
      </button>
      <button
        className='function-btn'
        id='subtract'
        value='-'
        onClick={handleOperations}
      >
        -
      </button>
      <button
        className='number-btn'
        id='one'
        value={1}
        onClick={handleNumber}
      >
        1
      </button>
      <button
        className='number-btn'
        id='two'
        value={2}
        onClick={handleNumber}
      >
        2
      </button>
      <button
        className='number-btn'
        id='three'
        value={3}
        onClick={handleNumber}
      >
        3
      </button>
      <button
        className='number-btn'
        id='zero'
        value={0}
        onClick={handleNumber}
      >
        0
      </button>
      <button
        className='number-btn'
        id='decimal'
        value='.'
        onClick={handleNumber}
      >
        .
      </button>
      <button
        // className='function-btn'
        id='equals'
        value='='
        onClick={handleEvalulation}
      >
        =
      </button>
      <button
        className='function-btn'
        id='clear'
        onClick={handleClear}
      >
        AC
      </button>
    </div>
  )
}

export default Buttons
