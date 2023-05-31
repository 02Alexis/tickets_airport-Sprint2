import React, { useContext } from "react";
import Down from "../../img/line.png";
import { searchParamsContext } from "../../Routes/AppRouter";
import {
  Contenedor,
  StyleContainer,
  StyleExit,
  StyleExit2,
  StyleFlex,
  Styletext,
} from "../reservationFligth/StyleReservationFligth";
import {
  ContenedorCost,
  StyleContainerCost,
  ContainerCost,
  ContainerCostIva,
  ColumnCost,
  StyleButtonNavigate,
  ServiciosOpcionales,
} from "../reservationFligth/StyleFlightCost";
import { useNavigate } from "react-router";

const DetailFligth = () => {
  const navigate = useNavigate();
  const handleButton = () => {
    console.log("entre");
    navigate("/purchasePage");
  };

  const { filters, selectedSeat, selectedSeatArrival } =
    useContext(searchParamsContext);

  return (
    <>
      <Contenedor>
        <h1>Tu reservación</h1>
        <StyleContainer>
          <StyleFlex>
            <p>Pasajeros</p>
            <h3>{filters.totalPassengers} Pasajero</h3>
          </StyleFlex>
          <p>Vuelo de salida</p>
          <StyleExit>
            <h1>{filters.selectedCity.slice(-3)}</h1>
            <img src={Down} alt="underscore" />
            <h1>{filters.selectedCityDon.slice(-3)}</h1>
          </StyleExit>
          <StyleExit2>
            <p>{filters.departureTime1}</p>
            <p></p>
            <p>{filters.arrivalTime1}</p>
          </StyleExit2>
          <Styletext>{filters.dateDre}</Styletext>

          <p>Vuelo de regreso</p>
          <StyleExit>
            <h1>{filters.selectedCityDon.slice(-3)}</h1>
            <img src={Down} alt="underscore" />
            <h1>{filters.selectedCity.slice(-3)}</h1>
          </StyleExit>
          <StyleExit2>
            <p>{filters.departureTime2}</p>
            <p></p>
            <p>{filters.arrivalTime2}</p>
          </StyleExit2>
          <Styletext>{filters.date}</Styletext>
        </StyleContainer>
      </Contenedor>

      <ContenedorCost>
        <h1>Costos de vuelo</h1>
        <StyleContainerCost>
          <ContainerCost>
            <div>
              <p>Tarida base</p>
              <p>Tarifa base equipaje</p>
              <p>Tarifa base equipaje 2</p>
              <ContainerCostIva>IVA Tarifa</ContainerCostIva>
              <h3>Total</h3>
            </div>
            <ColumnCost>
              <p>${filters.totalPricePassengers.toFixed(3)}</p>
              {/* <p>${selectedPrice1}</p> */}
              <p>${filters.selectedPrice2}</p>
              <p>${filters.selectedPrice1}</p>
              <ContainerCostIva>$75 MXN</ContainerCostIva>
              <h3>${filters.totalPrice}</h3>
            </ColumnCost>
          </ContainerCost>
        </StyleContainerCost>
      </ContenedorCost>

      <ServiciosOpcionales>
      <h1>Servicios Opcionales</h1>
        <StyleContainer>
          <div>
            <p>
              Asientos de Salida:{" "}
              {selectedSeat.map((seat) => seat).join(", ")}
            </p>
          </div>
          <div>
            <p>
              Asientos de Regreso:{" "}
              {selectedSeatArrival.map((seat) => seat).join(", ")}
            </p>
          </div>
        </StyleContainer>
      </ServiciosOpcionales>

      <StyleButtonNavigate>
        <button onClick={() => handleButton()}>pagar</button>
      </StyleButtonNavigate>
    </>
  );
};

export default DetailFligth;
