import React from 'react'
import './Titulo.css'

const Titulo = ({texto, emoji}) => {
  return (
    <div>

     <h1 className = "titulo"> 

      {texto} {emoji}

     </h1>
    </div>
  )
}

export default Titulo
