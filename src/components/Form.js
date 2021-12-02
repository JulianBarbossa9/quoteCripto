import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import useMoney from '../hooks/useMoney';
import useCripto from '../hooks/useCripto';
import axios  from 'axios';


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

    // STATE del listado de criptomonedas
    const [ listcripto, keepCripto] = useState([]);
    const [ error, keepError] = useState(false); 

    const typeMoney = [
        {code: 'COL', name: 'Peso Colombiano'},
        {code: 'MXN', name: 'Peso Mexicano'},
        {code: 'USD', name: 'Dolar de Estados Unidos'},
        {code: 'EUR', name: 'Euro'},
        {code: 'GBP', name: 'Libra Esterlina'},
    ]; 

    // Utilizar useMoney const [money , SelectMoney, updateMoney]
    const [money , SelectMoney] = useMoney('Select your Money', '',typeMoney); 


    // Utilizar useCripto
    const [criptoMoney, SelecCripto] = useCripto('Select your Criptomoney','', listcripto);

    //Ejecutar llamado a la API
    useEffect(() => {
        const queryAPI = async () =>{
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'; 
            const result = await axios.get(url);
            keepCripto(result.data.Data); 

            /**
             * Diferente forma de llamar una api usando "Axios"
             */
        }
        queryAPI();
    },[]); // <--- dependencias vacias

    // Cuando el usuairio hace el submit
    const quoteCoin = (e) => {
        e.preventDefault();

        //Validar si ambos campos estan llenos
        if(money == '' || criptoMoney == ''){
            keepError(true);
            return; 
        }

        keepError(false); 

        // Pasar datos a componente principal

    }

    return ( 
        <form
            onSubmit={quoteCoin}
        >
            {error ? <p className="error">Please select all fields</p> : null}

            <SelectMoney />
            <SelecCripto />

            <Button
                type="submit"
                value="Calculate"
            />

        </form>
     );
}
 
export default Form;