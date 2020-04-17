import React, { useState } from 'react';
import PropTypes from 'prop-types';


const DeseoInput = ( { nuevoDeseo } ) =>  {
    const [nuevoTexto, setNuevoTexto] = useState('');
    return (
    <fieldset className='deseo-input'>
        <legend className='deseo-label'>Nueva lista</legend>
        <input 
            className='deseo-input-field' 
            type="text" 
            placeholder='Introduce tu deseo aquí' 
            value={nuevoTexto} 
            onChange={e => setNuevoTexto(e.target.value)} 
            onKeyUp = {e => {
                if(e.key === 'Enter' && nuevoTexto.length){
                    nuevoDeseo({texto: nuevoTexto, cumplido: false});
                    setNuevoTexto("");
                }
            }}
        />
    </fieldset>
);
}

//propiedades que espera
DeseoInput.propTypes = {
    nuevoDeseo: PropTypes.func,
};

//por defecto vacio
DeseoInput.defaultProp = {
    nuevoDeseo: () => {},
};

export default DeseoInput;
