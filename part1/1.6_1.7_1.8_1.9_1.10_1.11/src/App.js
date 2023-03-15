import { useState } from 'react'
const Button = ({handleClick,text}) => {
  return (<button onClick={handleClick}>{text}</button>)
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  //functions
  const handleGood = () =>
  {
    let newGood = 0
    console.log('good before',good)
    newGood = good + 1
    console.log('good now', newGood)
    setGood(newGood)
  }

  const handleBad = () =>
  {
    let newBad = 0
    console.log('bad before',bad)
    newBad = bad + 1
    console.log('bad now', newBad)
    setBad(newBad)
  }
    const handleNeutral = () =>
  {
    let newNeutral = 0
    console.log('neutral before',neutral)
    newNeutral = neutral + 1
    console.log('neutral now', newNeutral)
    setNeutral(newNeutral)
  }
  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick = {handleGood} text ='good'/>
      <Button handleClick = {handleNeutral} text ='neutral'/>
      <Button handleClick = {handleBad} text ='bad'/>
      <h1>statisics</h1>
      good {good}<br/>
      neutral {neutral}<br/>
      bad {bad}<br/>
    </div>
  )
}

export default App