import React from 'react';
import './App.css';
import classNames from 'classNames';

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
            // si ha sido cumplido se aplica una clase de tachado
            <li className={classNames(
                'deseo-list-item',
                {'deseo-list-item-done': cumplido})}>
                <label htmlFor={`deseo${i}`}>
                    <input type="checkbox" checked={cumplido} name="" id={`deseo${i}`} />
                    {texto}
                </label>
            </li>
        ))}
    </ul>
    <button className='deseo-clear'> Deseos Completados </button>
</div>

export default App;