
const Buttons = ({handleNumber, handleAddition, handleEvalulation, handleClear}) => {

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
    <div>
      <button
        id='one'
        value={1}
        onClick={handleNumber}
      >
        1
      </button>
      <button
        id='two'
        value={2}
        onClick={handleNumber}
      >
        2
      </button>
      <button
        id='three'
        value={3}
        onClick={handleNumber}
      >
        3
      </button>
      <button
        id='four'
        value={4}
        onClick={handleNumber}
      >
        4
      </button>
      <button
        id='five'
        value={5}
        onClick={handleNumber}
      >
        5
      </button>
      <button
        id='six'
        value={6}
        onClick={handleNumber}
      >
        6
      </button>
      <button
        id='seven'
        value={7}
        onClick={handleNumber}
      >
        7
      </button>
      <button
        id='eight'
        value={8}
        onClick={handleNumber}
      >
        8
      </button>
      <button
        id='nine'
        value={9}
        onClick={handleNumber}
      >
        9
      </button>
      <button
        id='zero'
        value={0}
        onClick={handleNumber}
      >
        0
      </button>
      <button
        id='decimal'
        value='.'
        onClick={handleNumber}
      >
        .
      </button>
      <button
        id='add'
        value='+'
        onClick={handleAddition}
      >
        +
      </button>
      <button
        id='equals'
        value='='
        onClick={handleEvalulation}
      >
        =
      </button>
      <button
        id='clear'
        onClick={handleClear}
      >
        AC
      </button>
    </div>
  )
}

export default Buttons
