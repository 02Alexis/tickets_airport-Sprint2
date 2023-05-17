import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Button = styled.button`
  padding: 10px;
  margin: 5px;
  border: none;
  background: transparent;
  cursor: pointer;
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.div`
  background-color: white;
  width: 300px;
  padding: 20px;
  border-radius: 4px 4px 18px 18px;
`;

const PassengerContainer = styled.div`
  display: grid;
   grid-template-columns: repeat(2, 1fr);
  align-items: center;
  margin-bottom: 10px;
  div{
    justify-self: end;
    grid-row-gap: 1em;
    border: 1px solid black;
    border-radius: 5px;
    padding: 5px;
    margin: 5px;
    width: 100%;
  }
`;

const PassengerTitle = styled.h3`
  margin-bottom: 5px;
`;

const PassengerButton = styled.button`
  padding: 5px;
  margin: 2px;
  border:none;
  color: var(--purple);
  font-size: 30px;
  background: transparent;
`;

const ModalButton = styled.button`
  margin-top: 10px;
`;

const ModalPassenger = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [babies, setBabies] = useState(0);
  const [selectedPassengers, setSelectedPassengers] = useState({
    adults: 0,
    children: 0,
    babies: 0,
  });

  //'toggleModal': Esta función se encarga de cambiar el estado de 'modalOpen' entre 'true' y 'false'. Es utilizada para abrir y cerrar la ventana modal al hacer clic en el botón "Pasajeros".
  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  //'increasePassengerCount': Esta función se encarga de aumentar la cantidad de pasajeros de un tipo específico (adultos, niños o bebés). Recibe como parámetro el tipo de pasajero y actualiza el estado correspondiente utilizando 'setAdults', 'setChildren' o 'setBabies'.
  const increasePassengerCount = (type) => {
    if (type === 'adults') {
      setAdults(adults + 1);
    } else if (type === 'children') {
      setChildren(children + 1);
    } else if (type === 'babies') {
      setBabies(babies + 1);
    }
  };

  //'decreasePassengerCount': Esta función se encarga de disminuir la cantidad de pasajeros de un tipo específico (adultos, niños o bebés). Recibe como parámetro el tipo de pasajero y verifica si la cantidad actual es mayor a 0 antes de disminuirlo utilizando 'setAdults', 'setChildren' o 'setBabies'.
  const decreasePassengerCount = (type) => {
    if (type === 'adults' && adults > 0) {
      setAdults(adults - 1);
    } else if (type === 'children' && children > 0) {
      setChildren(children - 1);
    } else if (type === 'babies' && babies > 0) {
      setBabies(babies - 1);
    }
  };

  //'handleModalConfirm': Esta función se ejecuta al hacer clic en el botón "Confirmar" dentro de la ventana modal. Actualiza el estado 'selectedPassengers' con la cantidad seleccionada de adultos, niños y bebés. Luego, llama a 'toggleModal' para cerrar la ventana modal.
  const handleModalConfirm = () => {
    setSelectedPassengers({
      adults,
      children,
      babies,
    });
    toggleModal();
  };

  return (
    <Container>
      <Button onClick={toggleModal}>Pasajeros</Button>

      <div>
        {selectedPassengers.adults} Adultos, {selectedPassengers.children} Niños, {selectedPassengers.babies} Bebés
      </div>

      {modalOpen && (
        <Modal>
          <ModalContent>
            <PassengerContainer>
              <PassengerTitle>Adultos</PassengerTitle>
              <div>
                <PassengerButton onClick={() => decreasePassengerCount('adults')}>-</PassengerButton>
                <span>{adults}</span>
                <PassengerButton onClick={() => increasePassengerCount('adults')}>+</PassengerButton>
                </div>
            </PassengerContainer>

            <PassengerContainer>
              <PassengerTitle>Niños</PassengerTitle>
              <div>
                <PassengerButton onClick={() => decreasePassengerCount('children')}>-</PassengerButton>
                <span>{children}</span>
                <PassengerButton onClick={() => increasePassengerCount('children')}>+</PassengerButton>
              </div>
            </PassengerContainer>

            <PassengerContainer>
              <PassengerTitle>Bebés</PassengerTitle>
              <div>
                <PassengerButton onClick={() => decreasePassengerCount('babies')}>-</PassengerButton>
                <span>{babies}</span>
                <PassengerButton onClick={() => increasePassengerCount('babies')}>+</PassengerButton>
              </div>
            </PassengerContainer>
            

            <ModalButton onClick={handleModalConfirm}>Confirmar</ModalButton>
          </ModalContent>
        </Modal>
      )}
    </Container>
  );
};

export default ModalPassenger;
