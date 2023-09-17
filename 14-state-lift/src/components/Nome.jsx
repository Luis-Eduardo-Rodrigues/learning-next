import React from 'react';

function Nome({ setName }) {
  return (
    <>
        <p>Digite o seu nome</p>
        <input
        type="text"
        placeholder='Digite o seu nome'
        onChange={e => setName(e.target.value)}/>
    </>
  )
}

export default Nome;