import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div>

<Link to="/">Home</Link>|
<Link to="/sobre-nos">Sobre Nós</Link> |
<Link to="/contato">Contato</Link> |
<Link to="/nossos-clientes">Nossos Clientes</Link> |
<Link to="/localizacao">Localizacao</Link> |

    
    </div>
  )
}

export default Menu
