import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { compras } from "../../services/asientos";

import {
  Aisle,
  // Button,
  Column,
  // Column2,
  ReferenSeat,
  Row,
  SeatDeparture,
  // SeatSelect,
  StyleBottonDeparture,
  StyledContainer,
  StyledDate,
  Subtittle,
} from "./StyleSeatSelectionDeparture";
import { searchParamsContext } from "../../Routes/AppRouter";

const SeatSelectionDeparture = () => {
  const {
    // selectedCity,
    // setSelectedCity,
    // selectedCityDon,
    // setSelectedCityDon,
    // dateDre,
    // setDateDre,
    // date,
    // setDate,
    // totalPassengers,
    setTotalPassengers,
    setSelectedPassengers,
    // totalPricePassengers,
    // setTotalPricePassengers,
    // setFilters,
  } = useContext(searchParamsContext);

  const navigate = useNavigate();

  const volverAPaginaPrincipal = () => {
    navigate("/");
    window.location.reload();
  };

  const [selectedSeat, setSelectedSeat] = useState([]);

  console.log(compras);
  const Asientos = () => {
    const asientos = [];
    const filas = 10;
    const columnas = 6;

    for (let index = 0; index < filas; index++) {
      const arrayFilas = [];
      for (let position = 0; position < columnas; position++) {
        const isSpecialColumn = position === 2;
        const codeSeat = `${String.fromCharCode(65 + index)}${position + 1}`;

        const estaSeleccionado = selectedSeat.some((item) => item === codeSeat);
        arrayFilas.push(
          <button
            onClick={() => {
              const increasePassengerCount = (type) => {
                setSelectedPassengers((prevPassengers) => ({
                  ...prevPassengers,
                  [type]: prevPassengers[type] + 1,
                }));
                setTotalPassengers((prevTotal) => prevTotal + 1);
              };
              if (selectedSeat.length < increasePassengerCount) {
                setSelectedSeat([...selectedSeat, codeSeat]);
              }

              // setSelectedSeat([...selectedSeat, codeSeat])
            }}
            style={{
              marginRight: isSpecialColumn ? "50px" : "10px",
              width: "50px",
              height: "50px",
              border: "none",
              borderRadius: "5px",
              marginBottom: "10px",
              backgroundColor: estaSeleccionado ? "#red" : "#808080",
              cursor: "pointer",
            }}
            key={position}
          >
            {codeSeat}
          </button>
        );
      }
      asientos.push(arrayFilas);
    }

    return <div>{asientos}</div>;
  };

  return (
    <>
      <SeatDeparture>
        <StyledDate>
          <StyledContainer>
            <h1>Vuelo de Salida</h1>
            <StyleBottonDeparture onClick={volverAPaginaPrincipal}>
              Cambiar vuelo
            </StyleBottonDeparture>
          </StyledContainer>
          <h2>Jueves 20 jul 2023</h2>
          <h4>Medellín, Colombia(MDE)</h4>
          <p>Selecciona tus asientos</p>
        </StyledDate>
        <ReferenSeat>
          <Column>
            <Row>
              <Aisle>A</Aisle>
              <Aisle>B</Aisle>
              <Aisle>C</Aisle>
            </Row>
          </Column>
          <Column>
            <Aisle></Aisle>
          </Column>
          <Column>
            <Row>
              <Aisle>D</Aisle>
              <Aisle>E</Aisle>
              <Aisle>F</Aisle>
            </Row>
          </Column>
        </ReferenSeat>
        <Subtittle>
          <h5>Salida Segura</h5>
        </Subtittle>

        <Asientos />

        {/* <SeatSelect>
        <Column>
          <Row>
            <Button></Button>
            <Button></Button>
            <Button></Button>
          </Row>
          <Row>
            <Button></Button>
            <Button></Button>
            <Button></Button>
          </Row>
          <Row>
            <Button></Button>
            <Button></Button>
            <Button></Button>
          </Row>
          <Row>
            <Button></Button>
            <Button></Button>
            <Button></Button>
          </Row>
          <Row>
            <Button></Button>
            <Button></Button>
            <Button></Button>
          </Row>
        </Column>
          <Column2>
            <Aisle>1</Aisle>
            <Aisle>2</Aisle>
            <Aisle>3</Aisle>
            <Aisle>4</Aisle>
            <Aisle>5</Aisle>
            
          </Column2>
        <Column>
          <Row>
            <Button></Button>
            <Button></Button>
            <Button></Button>
          </Row>
          <Row>
            <Button></Button>
            <Button></Button>
            <Button></Button>
          </Row>
          <Row>
            <Button></Button>
            <Button></Button>
            <Button></Button>
          </Row>
          <Row>
            <Button></Button>
            <Button></Button>
            <Button></Button>
          </Row>
          <Row>
            <Button></Button>
            <Button></Button>
            <Button></Button>
          </Row>
        </Column>
      </SeatSelect>
      <Subtittle><h5>Estándar</h5></Subtittle>
      <SeatSelect>
        <Column>
          <Row>
            <Button></Button>
            <Button></Button>
            <Button></Button>
          </Row>
          <Row>
            <Button></Button>
            <Button></Button>
            <Button></Button>
          </Row>
          <Row>
            <Button></Button>
            <Button></Button>
            <Button></Button>
          </Row>
          <Row>
            <Button></Button>
            <Button></Button>
            <Button></Button>
          </Row>
          <Row>
            <Button></Button>
            <Button></Button>
            <Button></Button>
          </Row>
        </Column>
          <Column2>
            <Aisle>6</Aisle>
            <Aisle>7</Aisle>
            <Aisle>8</Aisle>
            <Aisle>9</Aisle>
            <Aisle>10</Aisle>
          </Column2>
        <Column>
          <Row>
            <Button></Button>
            <Button></Button>
            <Button></Button>
          </Row>
          <Row>
            <Button></Button>
            <Button></Button>
            <Button></Button>
          </Row>
          <Row>
            <Button></Button>
            <Button></Button>
            <Button></Button>
          </Row>
          <Row>
            <Button></Button>
            <Button></Button>
            <Button></Button>
          </Row>
          <Row>
            <Button></Button>
            <Button></Button>
            <Button></Button>
          </Row>
        </Column>
      </SeatSelect> */}
      </SeatDeparture>
    </>
  );
};

export default SeatSelectionDeparture;
