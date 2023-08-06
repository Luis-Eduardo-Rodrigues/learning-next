import React from 'react';
import Button from "./Button"

function Event() {

    function meuEvento(){
        alert("Evento via props")
    }

  return (
    <>
        <Button event={meuEvento} text="Primeiro Evento"></Button>
    </>
  )
}

export default Event;