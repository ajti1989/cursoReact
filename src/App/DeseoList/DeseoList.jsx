import React from 'React';
import classNames from 'classNames';
import PropTypes from 'prop-types';

const DeseoList = ({ deseos }) => (
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
);


//definimpo las props que va a aceptar el componete
DeseoList.propTypes = {
    deseos: PropTypes.arrayOf(PropTypes.shape({
        cumplido: PropTypes.bool,
        texto: PropTypes.string,
    }),
    ),
};

DeseoList.defaultProps = {
    deseos: [],
}




export default DeseoList;