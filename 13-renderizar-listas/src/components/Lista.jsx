import React from 'react';

function Lista({ itens }) {
  return(
    <>
        <h3>Lista de Linguagens</h3>
        {
            itens.length > 0 ? (
            itens.map((item, index) => (
                <li key={index}>{item}</li>
            ))) : (
                <p>Nao ha itens na lista</p>
            )}
    </>
  )
}

export default Lista;