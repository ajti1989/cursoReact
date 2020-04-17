import React from 'react';
import './App.css';

const deseos = [
    { texto: 'viajar a la luna', cumplido: false },
    { texto: 'pagar la factura del movil', cumplido: true },
    { texto: 'Hacer el proyecto', cumplido: false }
]

const App = () => <div className='app'>
    <h1>Mi lista de deseos</h1>
    <fieldset className='deseo-input'>
        <legend className='deseo-label'>Nueva lista</legend>
        <input className='deseo-input-field' type="text" placeholder='Enter tu deseo aquí' />
    </fieldset>
    <ul className = 'deseo-list'>
        {deseos.map(({ texto, cumplido }, i) => (
            <li className={`deseo-list-item ${cumplido ? 'deseo-list-item-done' : ''}`}>
                <label htmlFor={`deseo${i}`}>
                    <input type="checkbox" checked={cumplido} name="" id={`deseo${i}`} />
                    {texto}
                </label>
            </li>
        ))}
    </ul>
    <button className='deseo-clear'> Completados </button>
</div>

export default App;