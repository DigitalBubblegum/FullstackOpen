import { useState } from 'react'
//Components
const Button = ({handleClick,text}) => {
  return (<button onClick={handleClick}>{text}</button>)
}
const All = ({all}) => <tr><td>all</td><td>{all}</td></tr>
const Avg = ({average}) => <tr><td>average</td><td> {average}</td></tr>
const Pos = ({positive}) => <tr><td>positive</td><td>{positive} %</td></tr>
const Statistics = ({all, average, positive}) => {
  if (all!==0){
    return (<>
      <All all = {all} />
      <Avg average = {average} />
      <Pos positive= {positive} />
      </>
  )
  }
  else{
    return(
      <tr><td>No feedback given</td></tr>
    )
  }
}
const StatisticLine = ({text,value}) => {
  return (<tr><td>{text}</td><td>{value}</td></tr>)
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)
  //functions

  const handleGood = () =>
  {
    let newGood = 0
    let newAll = 0
    let newAvg = 0 
    let newPos = 0
    newGood = good + 1
    newAll = newGood + bad + neutral
    newAvg = (newGood - bad)/newAll
    newPos = (newGood/newAll) * 100
    setGood(newGood)
    setAll(newAll)
    setAverage(newAvg)
    setPositive(newPos)
  }

  const handleNeutral = () =>
  {
    let newNeutral = 0
    let newAll = 0
    let newAvg = 0 
    let newPos = 0
    newNeutral = neutral + 1
    newAll = good + bad + newNeutral
    newAvg = (good - bad) / newAll
    newPos = (good/newAll) * 100
    setNeutral(newNeutral)
    setAll(newAll)
    setAverage(newAvg)
    setPositive(newPos)
  }

  const handleBad = () =>
  {
    let newBad = 0
    let newAll = 0
    let newAvg = 0
    let newPos = 0 
    newBad = bad + 1
    newAll = good + newBad + neutral
    newAvg = (good - newBad) / newAll
    newPos = (good/newAll) * 100
    setBad(newBad)
    setAll(newAll)
    setAverage(newAvg)
    setPositive(newPos)
  }


  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick = {handleGood} text ='good'/>
      <Button handleClick = {handleNeutral} text ='neutral'/>
      <Button handleClick = {handleBad} text ='bad'/>
      <h1>statisics</h1>
      <table>
        <tbody>
          <StatisticLine text = "good" value = {good}/>
          <StatisticLine text = "neutral" value = {neutral}/>
          <StatisticLine text = "bad" value = {bad}/>
          <Statistics all = {all} average = {average} positive={positive} />
        </tbody>
      </table>

    </div>
  )
}

export default App