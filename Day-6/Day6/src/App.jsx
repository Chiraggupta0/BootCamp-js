import React from 'react'
import { useState } from 'react'
const App = () => {
  const[count,setCount] = useState(0)
  const handleclick=()=>{
    console.log("increment");
    setCount(count+1)
  }
  const handleDecclick=()=>{
    console.log("Decrement")
    setCount(count-1)
  }
  const handleResetclick=()=>{
    console.log("reset")
    setCount(   0)
  }
  return (
    <>
    <div>App</div>
    <h1>Count:{count}</h1>
    <button onClick={handleclick}>increment</button>
    <button onClick={handleDecclick}>decrement</button>
    <button onClick={handleResetclick}>reset</button>
    </>
  )
}

export default App