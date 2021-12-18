import React from 'react';
import styled from '@emotion/styled';

const MensajeError = styled.p`
  background-color: #b7322c;
  padding: 1rem;
  color: white;
  font-family: 'Bebas Neue',cursive;
  font-size: 25px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: bold;
  text-align: center;
  border-radius: 20px;
`;

const Error = ({mensaje}) => {
    return (  
        <MensajeError>{mensaje}</MensajeError>
    );
}
 
export default Error;