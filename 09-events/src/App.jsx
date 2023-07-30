import './App.css'
import Evento from './components/Evento'
import Submit from "./components/Submit"

function App() {
  return (
    <>
    <h1>Eventos no React</h1>
    <Evento numero="1"></Evento>
    <br />
    <br />
    <Evento numero='2'></Evento>
    <br />
    <br />
    <Submit></Submit>
    </>

  )
}

export default App
