import { useState } from 'react';
function Form() {

    function cadastrar(e){
        e.preventDefault()

        alert(`Usuario cadastrado com nome ${name} e senha ${password}`)
    }

    const [name, setName] = useState()
    const [password, setPassword] = useState()

  return (
    <>
    
        <form onSubmit={cadastrar}>
            <div>
                <input type="text" placeholder='Nome' onChange={(e) => setName(e.target.value)}/>
            </div>
            <br />
            <div>
                <input type="password" placeholder='Senha' onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <br />
            <input type="submit" value="Cadastrar"/>
        </form>
    
    </>
  )
}

export default Form;