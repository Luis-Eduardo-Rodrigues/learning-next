import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [state, setState] = useState("dark")


  const increment = () => {
    setCount(prevState => prevState + 1)
    setState("light")
  }

  return (
    <>
      <h1>Use State</h1>
      <p>{count}</p>
      <p>{state}</p>
      <button onClick={increment}>Increment</button>
    </>
  )
}

export default App
