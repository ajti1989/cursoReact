import React, { useState } from 'react';
import './App.css';
import DeseoInput from './DeseoInput';
import DeseoList from './DeseoList';

const deseosIni = [
    { texto: 'viajar a la luna', cumplido: false },
    { texto: 'pagar la factura del movil', cumplido: true },
    { texto: 'Hacer el proyecto', cumplido: false },
    { texto: 'Terminar curso de Angular', cumplido: true },
    { texto: 'Terminar curso de React', cumplido: false }

]

const App = () =>{
const [deseos, setDeseos] = useState(deseosIni);
return( 
<div className='app'>
    <h1>Mi lista de deseos</h1>
    <DeseoInput  nuevoDeseo = {deseo => setDeseos([...deseos, deseo])}/>
    <DeseoList deseos={deseos}/>
    <button className='deseo-clear'> Deseos Completados </button>
</div>
);
};
export default App;