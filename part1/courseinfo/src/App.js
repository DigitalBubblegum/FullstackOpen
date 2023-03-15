import { useState } from "react"
const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)
const App = () => {
  //states
  const [clicks, setClicks] = useState({
    left: 0, right: 0
  })
  const[comp, setComp] = useState('not compared yet')
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)
  const [value, setValue] = useState(0)

  //functions
  const handleLeftClick = () => {
    const newClicks = {
      ...clicks, 
      left: clicks.left + 1,
    }
    setAll(allClicks.concat('L'))
    const updatedLeft = clicks.left + 1
    console.log('left before', clicks.left)
    setClicks(newClicks)
    console.log('left after', updatedLeft)
    setTotal(updatedLeft + clicks.right)
  }

  const handleRightClick = () => {
    const newClicks = {
      ...clicks,  
      right: clicks.right + 1 
    }
    setAll(allClicks.concat('R'))
    const updatedRight = clicks.right + 1
    console.log('right before', clicks.right)
    setClicks(newClicks)
    console.log('right after', updatedRight)
    setTotal(clicks.left + updatedRight)
  }

  const handleCompClick = () => {
    let newComp = ''
    if (clicks.left>clicks.right) {
      console.log('left is greater')
      newComp = 'Left is greater than right'
    }
    else if (clicks.right > clicks.left) {
      console.log('right is greater')
      newComp = 'Right is greater than left'
    } 
    else {
      console.log('they are equal')
      newComp = <>They are equal</>
    }
    setAll(allClicks.concat('COMP'))
    setComp(newComp)
  }
  const setToValue = (newValue) => {
    console.log('value now', newValue)
    setValue(newValue)
  }
  return (
    <>
    <div>
      {clicks.left}
      <Button handleClick={handleLeftClick} text='left' />
      <Button handleClick={handleRightClick} text='right' />
      {clicks.right}
    </div>
    <button onClick={handleCompClick}>compare the values</button>
    <p>
      <>
      {comp}
      </>
    </p>
    <History allClicks = {allClicks}/>
    <p>total clicks = {total} </p>
    <div>
      {value}
      <Button handleClick={() => setToValue(1000)} text="thousand" />
      <Button handleClick={() => setToValue(0)} text="reset" />
      <Button handleClick={() => setToValue(value + 1)} text="increment" />
    </div>
    </>
  )
}
export default App