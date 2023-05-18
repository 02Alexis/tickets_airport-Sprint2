import React, { useState, useEffect } from "react"; //Importamos las dependencias necesarias:
import ArrivalsFlight from "../components/arrivalsFlights/ArrivalsFlight";
import DepartureFlight from "../components/departureFlight/DepartureFlight";
import GlobalStyled from "../components/app/StyledApp";
import ReservationFligth from "../components/reservationFligth/ReservationFligth";
import FlightCost from "../components/flightCost/FlightCost";
import LoadingComponent from "../components/loading/LoadingComponent"; // importamos el componente
import { Outlet, useLocation } from "react-router-dom";
import ButtonNavigateFlight from "../components/buttonNavigateFlight/ButtonNavigateFlight";

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
    }, 1000);
    if (location.pathname === "/flightDetail" && showFlightDetails) {
      setShowFlightDetail(false);
    }
  }, [showFlightDetails, location]);


  //Hacemos uso de 2 estados 'selectedContainer1' y 'selectedContainer2' para realizar un seguimiento de los contenedores seleccionados en los componentes 
  const [selectedContainer1, setSelectedContainer1] = useState(null);
  const [selectedContainer2, setSelectedContainer2] = useState(null);

    //'handleContainerClick1' y 'handleContainerClick2' son funciones que se llaman cuando se hace clic en un contenedor en los componentes anteriores, respectivamente. Estas funciones actualizan los estados 'selectedContainer1' y 'selectedContainer2' con el índice del contenedor seleccionado.
  // Manejar la selección de contenedor del primer componente
  const handleContainerClick1 = (containerIndex) => {
    setSelectedContainer1(containerIndex);
  };

  // Manejar la selección de contenedor del segundo componente
  const handleContainerClick2 = (containerIndex) => {
    setSelectedContainer2(containerIndex);
  };

  //El botón 'ButtonNavigateFlight' se muestra solo cuando se han seleccionado contenedores en ambos componentes.
  // Verificar si se debe mostrar el botón
  //Calcula la variable showButton que indica si se deben mostrar el botón. Esto sucede cuando ambos conjuntos de contenedores tienen una selección.
  const showButton = selectedContainer1 !== null && selectedContainer2 !== null;


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
                <ButtonNavigateFlight show={showButton} showSeatSelection={setShowFlightDetail}  />
                <DepartureFlight selectedContainer={selectedContainer1} handleContainerClick={handleContainerClick1} />
                <ArrivalsFlight selectedContainer={selectedContainer2} handleContainerClick={handleContainerClick2} />
                <ReservationFligth />
                <FlightCost />
              </>
            )}
          </>
        )}
      </div>
    </>
  );
};
export default FlightDetail;
