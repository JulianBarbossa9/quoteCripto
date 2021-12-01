import React from 'react';
import styled from '@emotion/styled';

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
    return ( 
        <form>
            <Button
                type="submit"
                value="Calculate"
            />

        </form>
     );
}
 
export default Form;