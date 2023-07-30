import React from 'react';

function Evento({numero}) {

    function meuEvento(){
        alert(`Fui ativado ${numero}`)
    }

  return (
    <>
    
    <p>Clique para esparar um evento</p>
    <button onClick={meuEvento}>Ativar!</button>
    
    </>
  )
}

export default Evento;