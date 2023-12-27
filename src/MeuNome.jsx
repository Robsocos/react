import React, { useState } from 'react'

const MeuNome = () => {
  const [nome, setNome] = useState ()
  
  
  const alterarNome = () => {
    var A = prompt("Digite seu nome");
    setNome(A)
  
    
  }
  return (

    <div> Meu nome é { nome } <br/>
    <button onClick = { alterarNome } > Clique aqui para inserir seu nome</button>
    </div>
    
  )
  
}

export default MeuNome
