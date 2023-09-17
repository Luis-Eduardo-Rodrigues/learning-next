import React from 'react';


function Saudacao({ nome }) {

    function gerarSaudacao(algumNome){
        return `Ola, ${algumNome} so u file?`
    }

  return (
    <>
    { nome && <p>{gerarSaudacao(nome)}</p>}

    </>
  )
}

export default Saudacao;