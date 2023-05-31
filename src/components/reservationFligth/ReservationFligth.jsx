import React, { useContext } from "react";
import { Contenedor, StyleContainer, StyleExit, StyleExit2, StyleFlex, Styletext } from "./StyleReservationFligth";
import { ContenedorCost, StyleContainerCost, ContainerCost, ContainerCostIva, ColumnCost, StyleButton } from "./StyleFlightCost";
import Down from '../../img/line.png'
import { searchParamsContext } from "../../Routes/AppRouter";


const ReservationFligth = ({departureTime1, handleButtonNavigateSelection, arrivalTime1, departureTime2, arrivalTime2, selectedPrice1, selectedPrice2, totalPrice, totalPricePassengers}) => {

  const {
    filters,
  } = useContext(searchParamsContext);

  // const [details, setDetails] = useState({});

  // useEffect(() => {
  //   console.log("datos de filters", filters);
  //   getCitiesData(filters.selectedCity).then(response => {
  //     console.log("datos de response",response);
  //   })
  // }, [filters])


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
      <img src={ Down } alt="underscore"/>
      <h1>{filters.selectedCityDon.slice(-3)}</h1>
    </StyleExit>
    <StyleExit2>
      <p>{departureTime1}</p>
      <p></p>
      <p>{arrivalTime1}</p>
    </StyleExit2>
    <Styletext>{filters.dateDre}</Styletext>
    
    <p>Vuelo de regreso</p>
    <StyleExit>
      <h1>{filters.selectedCityDon.slice(-3)}</h1>
      <img src={ Down } alt="underscore"/>
      <h1>{filters.selectedCity.slice(-3)}</h1>
    </StyleExit>
    <StyleExit2>
      <p>{departureTime2}</p>
      <p></p>
      <p>{arrivalTime2}</p>
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
          <ContainerCostIva>IVA Tarifa 16%</ContainerCostIva>
          <h3>Total</h3>
        </div>
        <ColumnCost>
        <p>${filters.totalPricePassengers.toFixed(3)}</p>
          {/* <p>${selectedPrice1}</p> */}
          <p>${selectedPrice2}</p>
          <p>${selectedPrice1}</p>
          <ContainerCostIva>$</ContainerCostIva>
          <h3>${totalPrice}</h3>
        </ColumnCost>
      </ContainerCost>
     </StyleContainerCost>
    </ContenedorCost>

    <StyleButton>
      <button onClick={() => handleButtonNavigateSelection()}> Seleccionar asientos </button>
     </StyleButton>
   

   </>
  );
};

export default ReservationFligth;
