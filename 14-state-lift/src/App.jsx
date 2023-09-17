import { useState } from 'react'
import './App.css'
import Nome from './components/Nome'
import Saudacao from './components/Saudacao'

function App() {
  const [name, setName] = useState()

  return (
    <>
      <h1>State Lift</h1>
      <Nome setName={setName}/>
      <p>{name}</p>
      <Saudacao nome={name}/>
    </>
  )
}

export default App
