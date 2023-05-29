import React, { useContext } from "react";
import { Contenedor, StyleContainer, StyleExit, StyleExit2, StyleFlex, Styletext } from "./StyleReservationFligth";
import { ContenedorCost, StyleContainerCost, ContainerCost, ColumnCost } from "./StyleFlightCost";
import Down from '../../img/line.png'
import { searchParamsContext } from "../../Routes/AppRouter";


const ReservationFligth = ({departureTime1, arrivalTime1, departureTime2, arrivalTime2, selectedPrice1, selectedPrice2, totalPrice}) => {

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
            <h3>1 Pasajero</h3>
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
{/* {filters.passengers} */}
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
          <p>Tarifa base equipaje 2</p>
          <p>Descuento Promocional</p>
          <p>IVA Tarifa</p>
          <h3>Total</h3>
        </div>
        <ColumnCost>
          <p>${selectedPrice1}</p>
          <p>${selectedPrice2}</p>
          <p>$471 MXN</p>
          <p>$75 MXN</p>
          <h3>${totalPrice}</h3>
        </ColumnCost>
      </ContainerCost>
     </StyleContainerCost>
    </ContenedorCost>
   </>
  );
};

export default ReservationFligth;
