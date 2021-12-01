import React, {Fragment, useState} from 'react';

// Hook == función
const useMoney = (label, stateInitial, typeMoney) => {

    //state de nuestro custom hook
    const [state, updateState] = useState(stateInitial);

    const Seleccionar = () => (
        <Fragment>
            <label>{label}</label>
            <select>
                <option value="">--Select--</option>
                {typeMoney.map(type => (
                    <option key={type.code} value={type.code} >{type.name}</option>
                ))}
            </select>
        </Fragment>
    );

    //Retorna state, interfaz y modifica el state
    return [ state, Seleccionar, updateState];
}

export default useMoney;  