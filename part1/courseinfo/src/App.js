import { useState } from "react"

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [comp, setComp] = useState('You have not yet clicked to compare')
  const compareValues = () => {
    if (left>right) {
      console.log('left is greater')
      return(<>Left is greater than right</>)
    }
    else if (right > left) {
      console.log('right is greater')
      return(<>Right is greater than left</>)
    } 
    else {
      console.log('they are equal')
      return(<>They are equal</>)
    }
  }
  return (
    <>
      <div>
        {left}
        <button onClick={() => setLeft(left + 1)}>
        left
        </button>
        <button onClick={() => setRight(right + 1)}>
        right
        </button>
      {right}
    </div>
    <button onClick={() => setComp(compareValues)}>Click to compare</button>
    <p><>{comp}</></p>
    </>
    
  )
}
export default App