import React from 'react';
import styled from '@emotion/styled';

const ResultStyle = styled.div`
    color: #fff;
    border: 2px solid white; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
`;

const InfoStyle = styled.p`
    font-size: 30px;
    font-family: Arial, Helvetica, da
    span {
        font-weight: bold;
    }
`;
const PrecioStyle = styled.p`
    font-size: 15px;

    span {
        font-wight: bold; 
    }
`;

const Quote = ({result}) => {
    
    if(Object.keys(result).length === 0) return null; // Si el objeto llega vacio no ejecuta nada
    
    console.log(result);
    return (  
        <ResultStyle>
            <InfoStyle>The price is: <span> {result.PRICE}</span></InfoStyle>
            <PrecioStyle>Higher price: <span> {result.HIGHDAY}</span></PrecioStyle>
            <PrecioStyle>Lower price: <span> {result.LOWDAY}</span></PrecioStyle>
            <PrecioStyle>Variation last 24 hours: <span> {result.CHANGEPCT24HOUR}</span></PrecioStyle>
            <PrecioStyle>Last update: <span> {result.LASTUPDATE}</span></PrecioStyle>
        </ResultStyle>
    );
}
 
export default Quote;