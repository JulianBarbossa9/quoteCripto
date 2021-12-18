import React, {Fragment, useState} from 'react';
import styled from '@emotion/styled';


const Label = styled.label`
    font-family: 'Bebas Neue',cursive;
    color:#fff;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.4rem;
    margin-top: 2rem;
    display: block;
`;

const Selector = styled.select`
    width: 100%;
    display: block;
    padding: 1rem;
    -webkit-appearance:none;
    border-radius:10px;
    border:none;
    font-size: 1.2rem;
`;

// Hook == función
const useMoney = (label, stateInitial, typeMoney) => {

    //state de nuestro custom hook
    const [state, updateState] = useState(stateInitial);

    const Seleccionar = () => (
        <Fragment>
            <Label>{label}</Label>
            <Selector
                onChange={e => updateState(e.target.value)}
                value={state}
            >
                <option va lue="">--Select--</option>
                {typeMoney.map(type => (
                    <option key={type.code} value={type.code}> {type.name} </option>
                ))}
            </Selector>
        </Fragment>
    );

    //Retorna state, interfaz y modifica el state
    return [ state, Seleccionar, updateState];
}

export default useMoney;  