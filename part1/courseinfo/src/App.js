import { useState } from "react"

const App = () => {
  //states
  const [clicks, setClicks] = useState({
    left: 0, right: 0
  })
  const[comp, setComp] = useState('not compared yet')
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)

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
    setAll(allClicks.concat('COMP'))
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
    <p>{allClicks.join(' ')}</p>
    <p>total clicks = {total} </p>
    </>
  )
}
export default App