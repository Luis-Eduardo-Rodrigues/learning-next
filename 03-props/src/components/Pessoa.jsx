import React from 'react';

function Pessoa({nome, idade, foto}) {
  return (
    <div>
        <img src={foto}/>
        <h2>Nome: {nome}</h2>
        <p>Idade: {idade}</p>
    </div>
  )
}

export default Pessoa;