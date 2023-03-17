import { useState } from 'react'
const Anecdotes = ({anecdotes,selected}) => {
  return(<div>
    <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
    </div>)
}
const Button = ({text,handleClick}) => {
  return(
    <button onClick={handleClick}>{text}</button>
  )
}
const Votes = ({points}) => {
  return(
    <p>has {points} votes</p>
  )
}
const Leader = ({anecdotes,points}) =>{
  console.log('leader is rendered')
  const indexOfMax = points.indexOf(Math.max(...points));
  console.log(indexOfMax);
  return(
    <div>
    <h1>Anecdote with the most votes</h1>
    {anecdotes[indexOfMax]}
    <br/>
    has {points[indexOfMax]} votes
    </div>
  )
}
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  //state
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState([0,0,0,0,0,0,0,0])
  //functions
  const addVote = () => {
    let newScore = 0
    const copy = [...points]
    console.log(copy);
    newScore = copy[selected] + 1
    copy[selected] = newScore
    console.log(copy);
    setPoints(copy)
  }
  const randomizer = (min, max) => {
  let rand = 0
  min = Math.ceil(min);
  max = Math.floor(max);
  rand = Math.floor(Math.random() * (max - min) + min);
  console.log(rand)
  setSelected(rand)
  }
  console.log(selected);
  return (
    <div>
      <Anecdotes anecdotes = {anecdotes} selected = {selected} />
      <Votes points = {points[selected]}/>
      <Button text = 'new anecdote' handleClick = {()=>randomizer(0,anecdotes.length)}/>
      <Button text = 'vote' handleClick={()=>addVote()}/>
      <Leader anecdotes = {anecdotes} points = {points}/>
    </div>
  )
}

export default App