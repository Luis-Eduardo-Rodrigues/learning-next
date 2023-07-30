import React from 'react';

function Submit() {

    function cadastrar(e){
        e.preventDefault()
        alert("Usuario cadastrado")
    }

  return (
    <>
    
    <form onSubmit={cadastrar}>
        <input type="text" placeholder='Digite seu nome'/>
        <input type="submit" value='Cadastrar'/>
    </form>
    
    </>
  )
}

export default Submit;