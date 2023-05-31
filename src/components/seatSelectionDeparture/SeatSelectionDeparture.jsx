import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  Aisle,
  Column,
  ReferenSeat,
  Row,
  SeatDeparture,
  StyleBottonDeparture,
  StyledContainer,
  StyledDate,
  Subtittle,
} from "./StyleSeatSelectionDeparture";
import { searchParamsContext } from "../../Routes/AppRouter";
import Swal from "sweetalert2";

const SeatSelectionDeparture = () => {

  const {
     totalPassengers, selectedSeat, setSelectedSeat, filters
    // setFilters,
  } = useContext(searchParamsContext);


  const navigate = useNavigate();

  const volverAPaginaPrincipal = () => {
    navigate("/");
    window.location.reload();
  };

  const handleSeatClick = (codeSeat) => {
    if (selectedSeat.includes(codeSeat)) {
      setSelectedSeat(selectedSeat.filter((seat) => seat !== codeSeat));
    } else {
      if (selectedSeat.length < totalPassengers) {
        setSelectedSeat([...selectedSeat, codeSeat]);
      } else {
        Swal.fire('Ya has seleccionado todos los asientos necesarios')
      }
    }
  };

  const Asientos = () => {
    const asientos = [];
    const filas = 10;
    const columnas = 6;

    const asientosBloqueados = ["A2", "C4", "D6", "E1", "F3", "F5"];

    const estaSeleccionado = (codeSeat) => {
      return selectedSeat.includes(codeSeat);
    };

    for (let index = 0; index < filas; index++) {
      const arrayFilas = [];
      for (let position = 0; position < columnas; position++) {
        const isSpecialColumn = position === 2;
        const codeSeat = `${String.fromCharCode(65 + index)}${position + 1}`;

        const isBloqueado = asientosBloqueados.includes(codeSeat);

        arrayFilas.push(
          <button
            onClick={() => handleSeatClick(codeSeat)}
            style={{
              marginRight: isSpecialColumn ? "65px" : "10px",
              width: "50px",
              height: "50px",
              border: `2px solid ${isBloqueado ? "#9e1071" : "transparent"}`,
              borderRadius: "5px",
              marginBottom: "10px",
              color: isBloqueado ? "white" : "#000",
              backgroundColor: isBloqueado
              ? "white" // Color negro para asientos bloqueados 
              : estaSeleccionado(codeSeat)
              ? "#9e1071"
              : "#b9b9b9",
              cursor: isBloqueado ? "not-allowed" : "pointer",
            }}
            key={position}
            disabled={isBloqueado}
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
          <h2>{filters.dateDre}</h2>
          <h4>{filters.selectedCity}, Colombia({filters.selectedCity.slice(-3)})</h4>
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
      </SeatDeparture>
    </>
  );
};

export default SeatSelectionDeparture;
