import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [resourceTypes, setResourceTypes] = useState("posts")
  const [itens, setItens] = useState([])

  useEffect(() => {
    const fecthItens = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/${resourceTypes}`)
    const data = await response.json()
    
    setItens(data)
    }

    fecthItens()
  },[resourceTypes])

  const changeRt = (resourceTypes) => {
    setResourceTypes(resourceTypes)
  }

  return (
    <>
      <h1>Use Effect</h1>
      <p>{resourceTypes}</p>
      <div style={{ display: "flex", alignItems: "center" }}>

        <button onClick={() => changeRt("posts")}>Posts</button>
        <button onClick={() => changeRt("comments")}>Comments</button>
        <button onClick={() => changeRt("todos")}>Todos</button>
      </div>

      {
        itens.map(i => {
          <p>{i.id}</p>
        })
      }
    </>
  )
}

export default App
