import React, { useContext } from "react";
import {
  AisleArrival,
  ColumnArrival,
  ReferentSeatArrival,
  RowArrival,
  SubtittleArrival,
} from "./StyleSeatSelectionArrival";
import {
  StyleBottonArrivals,
  StyledContainerArrival,
  StyledDateArrival,
  SeatArrival,
} from "./StyleSeatSelectionArrival";
import { searchParamsContext } from "../../Routes/AppRouter";
import Swal from "sweetalert2";

const SeatSelectionArrival = () => {
  const {
    filters,
    totalPassengers,
    selectedSeatArrival,
    setSelectedSeatArrival,
  } = useContext(searchParamsContext);

  const handleSeatClick = (codeSeat) => {
    if (selectedSeatArrival.includes(codeSeat)) {
      setSelectedSeatArrival(
        selectedSeatArrival.filter((seat) => seat !== codeSeat) 
      );
    } else {
      if (selectedSeatArrival.length < totalPassengers) {
        setSelectedSeatArrival([...selectedSeatArrival, codeSeat]);
      } else {
        Swal.fire("Ya has seleccionado todos los asientos necesarios");
      }
    }
  };

  const AsientosArrival = () => {
    const asientos = [];
    const filas = 10;
    const columnas = 6;

    const asientosBloqueados = ["C2", "C4", "F6", "F1", "H3", "I5"];

    const estaSeleccionado = (codeSeat) => {
      return selectedSeatArrival.includes(codeSeat);
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
      <SeatArrival>
        <StyledDateArrival>
          <StyledContainerArrival>
            <h1>Vuelo de Regreso</h1>
            <StyleBottonArrivals>Cambiar vuelo</StyleBottonArrivals>
          </StyledContainerArrival>
          <h2>{filters.date}</h2>
          <h4>
            {filters.selectedCityDon}, Colombia(
            {filters.selectedCityDon.slice(-3)})
          </h4>
          <p>Selección de asientos</p>
        </StyledDateArrival>

        <ReferentSeatArrival>
          <ColumnArrival>
            <RowArrival>
              <AisleArrival>A</AisleArrival>
              <AisleArrival>B</AisleArrival>
              <AisleArrival>C</AisleArrival>
            </RowArrival>
          </ColumnArrival>
          <ColumnArrival>
            <AisleArrival></AisleArrival>
          </ColumnArrival>
          <ColumnArrival>
            <RowArrival>
              <AisleArrival>D</AisleArrival>
              <AisleArrival>E</AisleArrival>
              <AisleArrival>F</AisleArrival>
            </RowArrival>
          </ColumnArrival>
        </ReferentSeatArrival>
        <SubtittleArrival>
          <h5>Salida Segura</h5>
        </SubtittleArrival>

        <AsientosArrival />
      </SeatArrival>
    </>
  );
};

export default SeatSelectionArrival;
