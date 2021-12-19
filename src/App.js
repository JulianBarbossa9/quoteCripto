import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import Quote from './components/Quote';
import Spiner from './components/Spiner';
import axios from 'axios'; // Se importa axios para hacer la consulta 
import styled from '@emotion/styled';
import imgPrin from './moneyCrip.png';


const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media ( min-width: 992px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: #fff;
  max-width: 900px;
  text-align: left;
  font-weight: 700;
  font-size: 50px; 
  margin-bottom:50px;
  margin-top: 80px;
  /* border: 2px solid red; */
  
  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
  }
`;

const Image = styled.img`
  max-width:550px;
  height: 550px;
  margin-top: 5rem;
  /* border: 2px solid red; */
  
`;



function App() {

  //Crear state
  const [ coin , keepCoin] = useState('');
  const [ criptoCoin , keepCriptoCoin]= useState('');
  const [ result, keepResult ] = useState ({});
  const [ loading, keeepLoading ] = useState(false); 

  useEffect(()=> {
    const queryCripto = async () => {
      // Evitar la ejecuión la primera vez
      if(coin === '') return; 
      /*
      * Consultar la api para obtener la información
      */
      const url =  `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoCoin}&tsyms=${coin}`;

      const result = await axios.get(url);    

      // Mostrar el spiner de carga
      keeepLoading(true); 

      // Ocultar el spniner con un setTimeOut y mostrar el resultado
      setTimeout(() => {
          // Cambiar el estado de cargando
          keeepLoading(false);

          //Guardar la cotización 
          keepResult(result.data.DISPLAY[criptoCoin][coin]); // <--- Acceder dinamicamente a la respuesta de la API 
      },3000); // <--- Aca le digo que se demore 3 segundos

    } 

    queryCripto(); 

  },[coin, criptoCoin]);// Los datos que van a cambiar cuando el susuario de el submit

  // Mostrar el spiner o el resultado
  const showSpiner = (loading) ? <Spiner /> : <Quote result={result} />
  
  return (
     <Container>
       <div>
          <Image 
            src={imgPrin}
            alt="Imagen Cripto"
          />
       </div>

       <div>
          <Heading>Cryptocurrency Quotation </Heading>
          <Form 
            keepCoin={keepCoin}
            keepCriptoCoin={keepCriptoCoin}
          />
       </div>
       
       {showSpiner}
        
      
     </Container>
  );
}

export default App;
