import React from 'react';
import './App.css';
import DeseoInput from './DeseoInput';
import DeseoList from './DeseoList';

const deseos = [
    { texto: 'viajar a la luna', cumplido: false },
    { texto: 'pagar la factura del movil', cumplido: true },
    { texto: 'Hacer el proyecto', cumplido: false },
    { texto: 'Terminar curso de Angular', cumplido: true },
    { texto: 'Terminar curso de React', cumplido: false }

]

const App = () => <div className='app'>
    <h1>Mi lista de deseos</h1>
    <DeseoInput />
    <DeseoList deseos={deseos}/>
    <button className='deseo-clear'> Deseos Completados </button>
</div>

export default App;