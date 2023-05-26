import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const Button = styled.button`
  margin: 5px;
  padding: 10px;
  background-color: ${(props) => (props.active ? 'blue' : 'gray')};
  color: white;
  border: none;
  cursor: pointer;
`;

// Componente para los botones de tipo de viaje
const TipoViajeButtons = ({ viaje, setViaje }) => {
    return (
      <ButtonContainer>
        <Button active={viaje === 'sencillo'} onClick={() => setViaje('sencillo')}>
          Viaje Sencillo
        </Button>
        <Button active={viaje === 'redondo'} onClick={() => setViaje('redondo')}>
          Viaje Redondo
        </Button>
      </ButtonContainer>
    );
  };

export default TipoViajeButtons