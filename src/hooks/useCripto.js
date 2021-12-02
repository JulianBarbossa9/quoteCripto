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
const useCripto = (label, stateInitial, typeMoneyCripto) => {

    //state de nuestro custom hook
    const [state, updateState] = useState(stateInitial);

    const SeleCripto = () => (
        <Fragment>
            <Label>{label}</Label>
            <Selector
                onChange={e => updateState(e.target.value)}
                value={state}
            >
                <option value="">--Select--</option>
                {typeMoneyCripto.map(typeCripto => (
                    <option key={typeCripto.CoinInfo.Id} value={typeCripto.CoinInfo.Name} >{typeCripto.CoinInfo.FullName}</option>
                ))}
            </Selector>
        </Fragment>
    );

    //Retorna state, interfaz y modifica el state
    return [ state, SeleCripto, updateState];
}

export default useCripto;  