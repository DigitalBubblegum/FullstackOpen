import { useState } from "react"

const Hello = ({ name, age }) => {
  const bornYear = () => new Date().getFullYear() - age
  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>you are probably born in {bornYear()}</p>
    </div>
  )
}

const Display = ({ counter }) => {
  console.log('Display Component is working here')
  return (<div> {counter}</div>)
}

const Button = ({handleClick, text}) => {
  console.log('button component is working here')
  return(<button onClick={ handleClick }>
        {text}
      </button>)
}

const App = (props) => {
  const [counter, setCounter] = useState(0)
  const increaseByOne = () => setCounter( counter + 1 )
  const decreaseByOne = () => setCounter( counter - 1 )
  const setToZero = () => setCounter(0)
  const name = 'Peter'
  const age = 24


  return (
    <>
    <Display counter = {counter} />
    <div>
      <Button handleClick = {setToZero} text = "reset"/>
      <Button handleClick = {increaseByOne} text = "plus 1 "/>
      <Button handleClick = {decreaseByOne} text = "minus 1"/>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
    </div></>
  )
}

export default App