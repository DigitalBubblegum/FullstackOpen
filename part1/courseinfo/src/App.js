const Hello = () => {
  return (
    <div>
      <p>
        This is a second component. 
      </p>
    </div>
  )
}
const Goodbye = (props) => {
  console.log(props)
  return (
    <div>
      <p>Hello {props.name} you are {props.age} old</p> 
    </div>
  ) 
}
const App = () => {
  const now = new Date()
  const a = 10
  const b = 20
  const name = 'Luli'
  const age = 10
  console.log(now,a+b)
  return (
    <div>
      <h1> This is the first component</h1>
      <h2>
        <Hello />
      </h2>
      <Hello />
      <Hello />
      <Hello />
      <Goodbye name = 'Stave Madden' age = {36+20} />
      <Goodbye name = {name} age ={age} />
    </div>
  )
}

export default App