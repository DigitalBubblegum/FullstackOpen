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

const App = (props) => {
  const [counter, setCounter] = useState(10)

setTimeout(
  () => setCounter(counter+1),
  1000
)
console.log('rendering...', counter)
  const name = 'Peter'
  const age = 24


  return (
    <><div>{counter}</div>
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
    </div></>
  )
}

export default App