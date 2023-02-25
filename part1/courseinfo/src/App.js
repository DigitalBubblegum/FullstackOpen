const Hello = () => {
  return (
    <div>
      <p>
        This is a second component. 
      </p>
    </div>
  )
}
const App = () => {
  const now = new Date()
  const a = 10
  const b = 20
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
    </div>
  )
}

export default App