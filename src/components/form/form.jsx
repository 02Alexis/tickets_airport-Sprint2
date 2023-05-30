import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  // Container,
  // ContainerTwo,
  StyleButton,
  StyleForm,
  StyledContainer,
} from "./StyleForm";
import Plane from "../../assets/plane.svg";
import ButtonModalCity from "../ButtonModalCity/ButtonModalCity";
import ModalPassenger from "../modalPassenger/ModalPassenger";

import { GetFlights } from "../../services/GetFlights";
import SelectHourDeparture from "../selectHourDeparture/SelectHourDeparture";
import SelectHourArrival from "../selectHourArrival/SelectHourArrival";
import ButtonmodalCytyDon from "../buttonmodalCytyDon/ButtonmodalCytyDon";
import { searchParamsContext } from "../../Routes/AppRouter";
import Swal from "sweetalert2";

const FormFligth = ({ viaje }) => {
  const [vuelos, setVuelos] = useState([]);
  const [cities, setCities] = useState([]);
  const [citiesDon, setCitiesDon] = useState([]);
  const [hoursDre, setHoursDre] = useState([]);
  const [hours, setHours] = useState([]);

  // const [selectedCity, setSelectedCity] = useState(""); // Estado para almacenar la ciudad seleccionada. Inicialmente está vacío.
  // const [selectedCityDon, setSelectedCityDon] = useState(""); // Estado para almacenar la ciudad seleccionada. Inicialmente está vacío.
  // const [dateDre, setDateDre] = useState("");
  // const [date, setDate] = useState("");
  // const [passengers, setPassengers] = useState({
  //   adults: 0,
  //   children: 0,
  //   babies: 0,
  // });

  const navigate = useNavigate();
  // const handleButton = () => {
  //   console.log("Link Start");
  //   navigate("/flightDetail");
  // };

  const {
    selectedCity,
    setSelectedCity,
    selectedCityDon,
    setSelectedCityDon,
    dateDre,
    setDateDre,
    date,
    setDate,
    totalPassengers,
    setTotalPassengers,
    totalPricePassengers,
    setTotalPricePassengers,
    setFilters,
  } = useContext(searchParamsContext);

  const handleButton = () => {
    console.log(selectedCity);
    console.log(selectedCityDon);
    console.log(dateDre);
    console.log(date);
    if (!selectedCity || !selectedCityDon || !dateDre || !date || !totalPassengers || !totalPricePassengers ) {
      Swal.fire("Oopss!", "No has completado todos los datos", "error");
    } else {
      const params = {
        selectedCity,
        selectedCityDon,
        dateDre,
        date,
        totalPassengers,
        totalPricePassengers,
      };
      setFilters(params);
      console.log(params);
      Swal.fire("Good job!", "Genial, datos Confirmados", "success").then(
        () => {
          sessionStorage.setItem("searchParams", JSON.stringify(params));
          navigate("/flightDetail");
        }
      );
    }
  };

  useEffect(() => {
    // console.log(cities);
    GetFlights()
      .then((response) => {
        if (!cities.length) {
          setCities(response);
        }
      })
      .catch((error) => console.log(error));

    GetFlights()
      .then((response) => {
        if (!vuelos.length) {
          setVuelos(response);
        }
      })
      .catch((error) => console.log(error));

    GetFlights()
      .then((response) => {
        if (!citiesDon.length) {
          setCitiesDon(response);
        }
      })
      .catch((error) => console.log(error));

    GetFlights()
      .then((response) => {
        if (!hours.length) {
          setHoursDre(response);
        }
      })
      .catch((error) => console.log(error));

    GetFlights()
      .then((response) => {
        if (!hoursDre.length) {
          setHours(response);
        }
      })
      .catch((error) => console.log(error));
  }, [vuelos, cities, citiesDon, hours, hoursDre]);

  return (
    <>
      {/* Campo Ciudad Origen */}
      <StyleForm>
        <StyledContainer>
          <ButtonModalCity
            cities={cities}
            selectedCity={selectedCity}
            setSelectedCity={setSelectedCity}
          />
        </StyledContainer>

        {/* Campo Ciudad Destino */}
        {viaje === "redondo" && (
          <StyledContainer>
            <ButtonmodalCytyDon
              name="destino"
              citiesDon={citiesDon}
              selectedCityDon={selectedCityDon}
              setSelectedCityDon={setSelectedCityDon}
            />
          </StyledContainer>
        )}

        {/* Campo Hora de Salida */}
        <SelectHourDeparture
          hoursDre={hoursDre}
          dateDre={dateDre}
          setDateDre={setDateDre}
        />

        {/* Campo Hora de Regreso */}
        {viaje === "redondo" && (
          <StyledContainer>
            <SelectHourArrival hours={hours} date={date} setDate={setDate} />
          </StyledContainer>
        )}

        {/* Campo Cantidad de Pasajeros */}
        <StyledContainer>
          <ModalPassenger totalPricePassengers={totalPricePassengers} setTotalPricePassengers={setTotalPricePassengers} totalPassengers={totalPassengers} setTotalPassengers={setTotalPassengers} />
        </StyledContainer>
      </StyleForm>
      <StyleButton
        type="button"
        onClick={() => {
          handleButton(vuelos.id);
        }}
      >
        <img src={Plane} alt="Avion" /> Buscar vuelos
      </StyleButton>
    </>
  );
};

export default FormFligth;

// comentario de prueba
