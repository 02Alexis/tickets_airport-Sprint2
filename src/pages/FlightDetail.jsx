import React, { useState, useEffect, useContext } from "react"; //Importamos las dependencias necesarias:
import ArrivalsFlight from "../components/arrivalsFlights/ArrivalsFlight";
import DepartureFlight from "../components/departureFlight/DepartureFlight";
import GlobalStyled, { CustomPageStyles } from "../components/app/StyledApp";
import ReservationFligth from "../components/reservationFligth/ReservationFligth";
import LoadingComponent from "../components/loading/LoadingComponent"; // importamos el componente
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { searchParamsContext } from "../Routes/AppRouter";
import Swal from "sweetalert2";

//Creamos el componente principal 'FlightDetail' y declaramos el estado 'isLoading' usando el hook 'useState'. inicialmente, establecemos el estado en true para indicar que la página está cargando
const FlightDetail = () => {
  const [isLoading, setIsLoading] = useState(true); // Estado para controlar si la página está cargando o no

  const [selectedButton1, setSelectedButton1] = useState(null);
  const [selectedButton2, setSelectedButton2] = useState(null);


  const navigate = useNavigate();
  const {
    selectedCity,
    selectedCityDon,
    dateDre,
    date,
    totalPassengers,
    totalPricePassengers,

    departureTime1,
    setDepartureTime1,
    arrivalTime1,
    setArrivalTime1,
    selectedPrice1,
    setSelectedPrice1,
    departureTime2,
    setDepartureTime2,
    arrivalTime2,
    setArrivalTime2,
    selectedPrice2,
    setSelectedPrice2,
    totalPrice,
    setTotalPrice,

    setFilters,
  } = useContext(searchParamsContext);

  const handleButtonNavigateSelection = () => {
    console.log(departureTime1);
    if (
      !selectedCity ||
      !selectedCityDon ||
      !dateDre ||
      !date ||
      !totalPassengers ||
      !totalPricePassengers ||
      
      !departureTime1 ||
      !arrivalTime1 ||
      !selectedPrice1 ||
      !departureTime2 ||
      !arrivalTime2 ||
      !selectedPrice2 ||
      !totalPrice
    ) {
      Swal.fire(
        "Oopss!",
        "No has completado todos los datos, por favor selecciona un tipo de equipaje",
        "error"
      );
    } else {
      const params = {
        selectedCity,
        selectedCityDon,
        dateDre,
        date,
        totalPassengers,
        totalPricePassengers,

        departureTime1,
        arrivalTime1,
        selectedPrice1,
        departureTime2,
        arrivalTime2,
        selectedPrice2,
        totalPrice,
      };
      setFilters(params);
      Swal.fire(
        "Good job!",
        "Genial, datos Confirmados, es hora de seleccionar tus asientos",
        "success"
      ).then(() => {
        sessionStorage.setItem("searchParams", JSON.stringify(params));
        navigate("/flightDetail/seatSelection");
        setShowFlightDetail(true);
      });
    }
  };

  const handleDepartureClick = (departure, arrival, price) => {
    setDepartureTime1(departure);
    setArrivalTime1(arrival);
    setSelectedPrice1(price);
    setSelectedButton1(price);
    calculateTotalPrice(price, selectedPrice2);
  };

  const handleArrivalClick = (departure, arrival, price) => {
    setDepartureTime2(departure);
    setArrivalTime2(arrival);
    setSelectedPrice2(price);
    setSelectedButton2(price);
    calculateTotalPrice(selectedPrice1, price);
  };

  const calculateTotalPrice = (price1, price2) => {
    const total = parseFloat(price1) + parseFloat(price2)+ parseFloat(totalPricePassengers);
    setTotalPrice(total.toFixed(2));
  };

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
                <CustomPageStyles />
                <DepartureFlight
                  selectedButton1={selectedButton1}
                  handleDepartureClick={handleDepartureClick}
                />
                <ArrivalsFlight
                  selectedButton2={selectedButton2}
                  handleArrivalClick={handleArrivalClick}
                />
                <ReservationFligth
                handleButtonNavigateSelection={handleButtonNavigateSelection}
                  departureTime1={departureTime1}
                  arrivalTime1={arrivalTime1}
                  departureTime2={departureTime2}
                  arrivalTime2={arrivalTime2}
                  selectedPrice1={selectedPrice1}
                  selectedPrice2={selectedPrice2}
                  totalPrice={totalPrice}
                />
              </>
            )}
          </>
        )}
      </div>
    </>
  );
};
export default FlightDetail;
