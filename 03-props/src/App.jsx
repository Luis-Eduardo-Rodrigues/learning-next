import { useState } from 'react'
import './App.css'
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'

function App() {

   return (
    <>
     <h1>Trabalhando com props</h1>
     <br />
     <SayMyName nome="Luis Eduardo"></SayMyName>
     <Pessoa foto="https://github.com/Luis-Eduardo-Rodrigues.png" nome="Luis" idade="15"></Pessoa>
    </>
  )
}

export default App
