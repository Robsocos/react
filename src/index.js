import React from 'react';
import ReactDOM from 'react-dom/client';
import MeuNome from './MeuNome';
import BotaoLegal from './BotaoLegal';
import Titulo from './Titulo';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Localizacao from './pages/Localizacao';
import Contato from './pages/Contato';
import Inicio from './pages/Inicio';
import SobreNos from './pages/SobreNos';
import NossosClientes from './pages/NossosClientes';


const root = ReactDOM.createRoot(document.getElementById('root'));


const nome = 'Robson'

const router= createBrowserRouter([

{
  path:'/',
  element:<Inicio/>
},
{
  path:'/sobre-nos',
  element:<SobreNos/>
},
{
path:'/contato',
element:<Contato/>
},
{
  path:'/nossos-clientes',
  element:<NossosClientes/>
},
{
  path:'/localizacao',
  element:<Localizacao/>
  }
])
root.render(
  <RouterProvider router = {router}/>

  //<div>
    //{/* <BotaoLegal texto = "Fazer login" emoji="😃"/> 
    //<BotaoLegal texto = " Me cadastrar"emoji ="🗡"/>
    //<Titulo texto = "Escreva seu título" emoji = "👍"/>
    //<Titulo texto = "Seja bem vindo"/>
    //<Titulo texto = "Boa noite"/> */}
     
 //<a href="">Home</a>
 //<a href="">Sobre Nós</a>
 //<a href="">Contato</a>
 //<a href="">Nossos Clientes</a>
 //<a href="">Localização</a>
//</div>
);

