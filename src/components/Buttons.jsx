
const Buttons = () => {

  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const stringNumbers = ['zero', 'one', 'two', 'three', 'four', 'five','six', 'seven', 'eight', 'nine']

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

  const elements = buttonProps.map((propObj) => {
    return (
      <button
      key={propObj.id}
      id={propObj.id}
      >
        {propObj.content}
      </button>
    )
  })

  return (
    <div>
      {elements}
    </div>
  )
}

export default Buttons
