import React, { useState, useEffect } from "react"; //Importamos las dependencias necesarias:
import ArrivalsFlight from "../components/arrivalsFlights/ArrivalsFlight";
import DepartureFlight from "../components/departureFlight/DepartureFlight";
import GlobalStyled from "../components/app/StyledApp";
import ReservationFligth from "../components/reservationFligth/ReservationFligth";
import FlightCost from "../components/flightCost/FlightCost";
import LoadingComponent from "../components/loading/LoadingComponent"; // importamos el componente
import { Outlet, useLocation } from "react-router-dom";


//Creamos el componente principal 'FlightDetail' y declaramos el estado 'isLoading' usando el hook 'useState'. inicialmente, establecemos el estado en true para indicar que la página está cargando 
const FlightDetail = () => {
  const [isLoading, setIsLoading] = useState(true); // Estado para controlar si la página está cargando o no

  const [showFlightDetails, setShowFlightDetail] = useState(false);
  let location = useLocation();


  //Utilizamos el hook 'useEffect' para simular una carga asincrónica. El efecto se ejecuta una sola vez al renderizar el componente ([] como dependencia). En el cuerpo del efecto, utilizamos un 'setTimeout' para cambiar el estado de 'isLoading' a false después de x segundos.
  useEffect(() => {
    // Simulación de una carga asincrónica
    setTimeout(() => {
      setIsLoading(false); // Actualiza el estado para indicar que la carga ha terminado después de x segundos
    }, 100);
    if (location.pathname === "/flightDetail" && showFlightDetails) {
      setShowFlightDetail(false);
    }
  }, [showFlightDetails, location]);


  //Renderizamos el contenido condicionalmente: Si 'isLoading' es true, se muestra el componente 'LoadingComponent', que representa la animación de carga con el avión volando. Si 'isLoading' es false, se muestra el contenido de la página.
  return (
    <>
      <div>
        {isLoading ? (
          <LoadingComponent /> // Si 'isLoading' es true, muestra el componente de carga
        ) : (
          <>
            {showFlightDetails ? (
              <Outlet />
            ) : (
              <>
                <GlobalStyled />
                <DepartureFlight />
                <ArrivalsFlight />
                <ReservationFligth />
                <FlightCost showSeatSelection={setShowFlightDetail} />
              </>
            )}
          </>
        )}
      </div>
    </>
  );
};
export default FlightDetail;
