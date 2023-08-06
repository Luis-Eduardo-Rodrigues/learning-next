import { useState } from "react";

import React from 'react';

function Condicional() {
    const [email, setEmail] = useState()
    const [useEmail, setUserEmail] = useState()

    function enviar(e){
        e.preventDefault()
        setUserEmail(email)
    }

    function limpar(){
        setUserEmail("")
    }

  return (
    <>
        <h2>Enviar e-mail</h2>
        <form>
        <input type="email"
        placeholder="Enviar e-mail"
        onChange={e => setEmail(e.target.value)}/>
        <button type="submit" onClick={enviar}>Enviar</button>
        </form>
        {useEmail && (
            <>
                <p>O e-mail é: {useEmail}</p>
                <button onClick={limpar}>Limpar e-mail</button>
            </>
        )
        }
    </>
  )
}
export default Condicional;