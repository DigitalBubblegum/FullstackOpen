import { useState } from "react"

const App = () => {
  const [clicks, setClicks] = useState({
    left: 0, right: 0
  })
  const[comp, setComp] = useState('not compared yet')
  const handleLeftClick = () => {
    const newClicks = {
      ...clicks, 
      left: clicks.left + 1,
    }
    setClicks(newClicks)
  }

  const handleRightClick = () => {
    const newClicks = {
      ...clicks,  
      right: clicks.right + 1 
    }
    setClicks(newClicks)
  }

  const handleCompClick = () => {
    let newComp = ''
    if (clicks.left>clicks.right) {
      console.log('left is greater')
      newComp = <>Left is greater than right</>
    }
    else if (clicks.right > clicks.left) {
      console.log('right is greater')
      newComp = <>Right is greater than left</>
    } 
    else {
      console.log('they are equal')
      newComp = <>They are equal</>
    }
    setComp(newComp)
  }

  return (
    <>
    <div>
      {clicks.left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {clicks.right}
    </div>
    <button onClick={handleCompClick}>compare the values</button>
    <p>
      <>
      {comp}
      </>
    </p>
    </>
  )
}
export default App