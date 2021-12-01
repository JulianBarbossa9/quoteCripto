import React from 'react';
import styled from '@emotion/styled';
import useMoney from '../hooks/useMoney';


const Button = styled.input`
    margin-top:20px;
    font-weight: bold;
    font-size: 25px;
    padding: 10px;
    background-color: #66a2fe;
    border:none;
    width: 100%;
    border-radius: 15px;
    color: white;
    transition: background color .3s ease;

    &:hover{
        background-color: #326ac0;
        cursor: pointer;
        
    }
`;

const Form = () => {

    const typeMoney = [
        {code: 'COL', name: 'Peso Colombiano'},
        {code: 'MXN', name: 'Peso Mexicano'},
        {code: 'USD', name: 'Dolar de Estados Unidos'},
        {code: 'EUR', name: 'Euro'},
        {code: 'GBP', name: 'Libra Esterlina'},
    ]; 

    // Utilizar useMoney const [money , SelectMoney, updateMoney]
    const [money , SelectMoney] = useMoney('Select your Money', '',typeMoney); 
    return ( 
        <form>

            <SelectMoney />

            <Button
                type="submit"
                value="Calculate"
            />

        </form>
     );
}
 
export default Form;