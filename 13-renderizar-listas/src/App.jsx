import Lista from "./components/Lista"

function App() {

  const meusItens = ["React", "Vue", "Angular"]

  return (
    <>
      <h1>Renderizar Listas</h1>
      <Lista itens={meusItens}></Lista>
      <Lista itens={[]}></Lista>
    </>
  )
}

export default App
