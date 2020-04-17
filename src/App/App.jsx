import React from 'react';

const deseos = [
    { texto: 'viajar a la luna', cumplido: false },
    { texto: 'pagar la factura del movil', cumplido: true },
    { texto: 'Hacer el proyecto', cumplido: false }
]

const App = () => <div>
    <h1>Mi lista de deseos</h1>
    <fieldset>
        <legend>Nueva lista</legend>
        <input type="text" placeholder='Enter tu deseo aquí' />
    </fieldset>
    <ul>
        {deseos.map(({ texto, cumplido }, i) => (
            <li>
                <label htmlFor={`deseo${i}`}>
                    <input type="checkbox" checked={cumplido} name="" id={`deseo${i}`} />
                    {texto}
                </label>
            </li>
        ))}
    </ul>
</div>

export default App;