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
  // Extracción de valores del contexto
  const {
    filters,
    totalPassengers,
    selectedSeatArrival,
    setSelectedSeatArrival,
  } = useContext(searchParamsContext);

  // Lógica para manejar el clic en el asiento, un manejador de eventos 
  const handleSeatClick = (codeSeat) => { //(codeSeat) es el parámetro que representa el código del asiento en el que se hizo clic.
    if (selectedSeatArrival.includes(codeSeat)) {//verifica si el asiento seleccionado ya está incluido en el array 'selectedSeatArrival' de asientos seleccionados. En otras palabras, verifica si el asiento ya está seleccionado.
      //Si el asiento ya está seleccionado, se ejecuta el bloque de código dentro del if. En este caso, se utiliza la función 'setSelectedSeatArrival' para actualizar el estado de 'selectedSeatArrival' eliminando el asiento del array. Esto se logra utilizando el método filter, que crea un nuevo array con todos los elementos excepto el asiento que se va a eliminar.
      setSelectedSeatArrival(
        selectedSeatArrival.filter((seat) => seat !== codeSeat) 
      );

      //Si el asiento no está seleccionado, se ejecuta el bloque de código dentro del else. En este caso, se realiza otra verificación: if '(selectedSeatArrival.length < totalPassengers)'. Esto verifica si aún hay capacidad para seleccionar más asientos en función del número total de pasajeros. Si hay capacidad disponible, se agrega el asiento al array selectedSeatArrival utilizando el operador de propagación '([...selectedSeatArrival, codeSeat])' para crear un nuevo array que incluya el asiento recién seleccionado.
    } else {
      if (selectedSeatArrival.length < totalPassengers) {
        setSelectedSeatArrival([...selectedSeatArrival, codeSeat]);
      } else {
        Swal.fire("Ya has seleccionado todos los asientos necesarios");
      }
    }
  };

  // componente que genera la representación visual de los asientos en la interfaz de selección de asientos de llegada.
  const AsientosArrival = () => {
    const asientos = [];
    const filas = 10;
    const columnas = 6;

    const asientosBloqueados = ["C2", "C4", "F6", "F1", "H3", "I5"];

    //declaramos 'estaSeleccionado' que verifica si un asiento está seleccionado. La función verifica si el código del asiento dado está incluido en el array 'selectedSeatArrival' de asientos seleccionados.
    const estaSeleccionado = (codeSeat) => {
      return selectedSeatArrival.includes(codeSeat);
    };

    //Se utiliza un bucle 'for' anidado para generar las filas y columnas de asientos. El bucle exterior itera a través de las filas, mientras que el bucle interior itera a través de las columnas
    for (let index = 0; index < filas; index++) {
      const arrayFilas = [];
      for (let position = 0; position < columnas; position++) {
        // 'isSpecialColumn'  declara una variable 
        const isSpecialColumn = position === 2;

        //declaramos 'codeSeat' que representa el código del asiento actual. Se utiliza el método 'String.fromCharCode' para obtener el carácter correspondiente al índice de la fila más 65 (para obtener las letras A, B, C, ...), y se concatena con la posición más 1 para obtener el número del asiento.
        const codeSeat = `${String.fromCharCode(65 + index)}${position + 1}`;

        //declaramos 'isBloqueado' que indica si el asiento actual está bloqueado. Se utiliza el método 'includes' para verificar si el código del asiento está incluido en el array 'asientosBloqueados'.
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
      //El botón se agrega al array 'arrayFilas' utilizando el método 'push'.
      //Después de completar una fila de asientos, el array 'arrayFilas' se agrega al array asientos utilizando el método 'push'.
      asientos.push(arrayFilas);
    }

    // contiene todas las filas de asientos generadas.
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
