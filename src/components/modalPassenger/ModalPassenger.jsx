import React, { useState } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  border: 2px solid;
  border-color: var(--Gray);
  border-radius: 5px;
  padding: 0;
`;

const Button = styled.div`
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
  div {
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
  border: none;
  color: var(--purple);
  font-size: 30px;
  background: transparent;
`;

const ModalButton = styled.button`
  margin-top: 10px;
`;

const Error = styled.div`
  color: red;
  font-size: 1.3rem;
`;

const adultPrice = 18.0;
const childPrice = 9.0;
const babiesPrice = 5.0;

const ModalPassenger = ({
  setTotalPassengers,
  totalPassengers,
  setTotalPricePassengers,
}) => {

const ModalPassenger = ({ passengers, setPassengers }) => {
  const [modalOpen, setModalOpen] = useState(false);
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
    setSelectedPassengers((prevPassengers) => ({
      ...prevPassengers,
      [type]: prevPassengers[type] + 1,
    }));
    setTotalPassengers((prevTotal) => prevTotal + 1);
    console.log(passengers);
  };

  //'decreasePassengerCount': Esta función se encarga de disminuir la cantidad de pasajeros de un tipo específico (adultos, niños o bebés). Recibe como parámetro el tipo de pasajero y verifica si la cantidad actual es mayor a 0 antes de disminuirlo utilizando 'setAdults', 'setChildren' o 'setBabies'.
  const decreasePassengerCount = (type) => {
    if (selectedPassengers[type] > 0) {
      setSelectedPassengers((prevPassengers) => ({
        ...prevPassengers,
        [type]: prevPassengers[type] - 1,
      }));
      setTotalPassengers((prevTotal) => prevTotal - 1);
    }
  };

  //'handleModalConfirm': Esta función se ejecuta al hacer clic en el botón "Confirmar" dentro de la ventana modal. Actualiza el estado 'selectedPassengers' con la cantidad seleccionada de adultos, niños y bebés. Luego, llama a 'toggleModal' para cerrar la ventana modal.
  const handleModalConfirm = () => {
    const total =
      selectedPassengers.adults +
      selectedPassengers.children +
      selectedPassengers.babies;
    setTotalPassengers(total);

    if (
      (selectedPassengers.children > 0 && selectedPassengers.adults === 0) ||
      (selectedPassengers.babies > 0 && selectedPassengers.adults === 0)
    ) {
      Swal.fire({
        title: "¡Alerta!",
        text: "Debe viajar al menos un adulto con el niño o bebé.",
        icon: "warning",
        confirmButtonText: "Aceptar",
      });
      return;
    }

    const adultCost = selectedPassengers.adults * adultPrice;
    const childCost = selectedPassengers.children * childPrice;
    const babiesCost = selectedPassengers.babies * babiesPrice;
    const totalCost = adultCost + childCost + babiesCost;
    setTotalPricePassengers(totalCost);

    toggleModal();
  };

  return (
    <>
      <Container>
        <Button onClick={toggleModal}>Pasajeros</Button>
  
        <div>{totalPassengers} pasajeros</div>
              
        {modalOpen && (
          <Modal>
            <ModalContent>
              <PassengerContainer>
                <PassengerTitle>Adultos</PassengerTitle>
                <div>
                  <PassengerButton
                    onClick={() => decreasePassengerCount("adults")}
                  >
                    -
                  </PassengerButton>
                  <span>{selectedPassengers.adults}</span>
                  <span>{passengers.adults}</span>
                  <PassengerButton
                    onClick={() => increasePassengerCount("adults")}
                  >
                    +
                  </PassengerButton>
                </div>
              </PassengerContainer>

              <PassengerContainer>
                <PassengerTitle>Niños</PassengerTitle>
                <div>
                  <PassengerButton
                    onClick={() => decreasePassengerCount("children")}
                  >
                    -
                  </PassengerButton>
                  <span>{selectedPassengers.children}</span>
                  <span>{passengers.children}</span>
                  <PassengerButton
                    onClick={() => increasePassengerCount("children")}
                  >
                    +
                  </PassengerButton>
                </div>
              </PassengerContainer>

              <PassengerContainer>
                <PassengerTitle>Bebés</PassengerTitle>
                <div>
                  <PassengerButton
                    onClick={() => decreasePassengerCount("babies")}
                  >
                    -
                  </PassengerButton>
                  <span>{selectedPassengers.babies}</span>
                  <span>{passengers.babies}</span>
                  <PassengerButton
                    onClick={() => increasePassengerCount("babies")}
                  >
                    +
                  </PassengerButton>
                </div>
              </PassengerContainer>

              <ModalButton onClick={handleModalConfirm}>Confirmar</ModalButton>
            </ModalContent>
          </Modal>
        )}
      </Container>
      {!modalOpen && !totalPassengers ? (
        <Error>{"Este campo es obligatorio"} </Error>
      ) : null}
    </>
  );
};

export default ModalPassenger;
