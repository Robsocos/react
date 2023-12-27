import React from 'react';
import Menu from '../Components/Menu';
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { Home } from '@mui/icons-material';


const Inicio = () => {
  return (
    <div>

     
      <Menu/>
      <br></br>
      <Button variant="contained"
      disableElevation
      size="large"
      color="success"
      startIcon={<Home/>}
      endIcon={<Home/>}
      >
        Clique aqui 
      </Button> 
      <br></br>
      <br></br>
<TextField id="Digite Seu Nome" label="Escreva Seu Nome" variant='outlined'/>

<br></br>
<br></br>

<InputLabel id="label-sexo">Sexo</InputLabel>
<Select  labelId="label-sexo" label="sexo">
<MenuItem>Masculino</MenuItem>
<MenuItem>Feminino</MenuItem>
</Select>
<br />
<br />

      Início
    </div>
  )
}

export default Inicio

