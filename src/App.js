import React from 'react';
import styled from '@emotion/styled';
import imgPrin from './moneyCrip.png';
import Form from './components/Form';


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
          
          />
       </div>
     </Container>
  );
}

export default App;
