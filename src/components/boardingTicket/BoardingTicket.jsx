import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { searchParamsContext } from "../../Routes/AppRouter";
import { BoardingPass, BoardingPassItem, BottomBar, ContBord1, ContBord2, Container, Grid, ReservationCodeTitle, TopBar, UserDataColumn, UserDataItem } from "./StyleBordingTicket";
import QrCode from "../../assets/qrcode-svgrepo-com.svg"

const BoardingTicket = () => {
  const [userData, setUserData] = useState(null);
  const { filters, selectedSeat, selectedSeatArrival } = useContext(searchParamsContext);

  useEffect(() => {
    const fetchLastUserFromAPI = async () => {
      try {
        // Realiza la solicitud GET a la API para obtener los usuarios ordenados por createdAt en orden descendente
        const response = await axios.get(
          "https://minibackend-aerolinea-app-production.up.railway.app/compra?_sort=createdAt&_order=desc"
        );
        const data = response.data;
        console.log("Últimos usuarios:", data);

        if (data.length > 0) {
          // Si se encontraron usuarios, guarda los datos del último en el estado
          setUserData(data[data.length - 1]);
        } else {
          // No se encontraron usuarios
          setUserData(null);
        }
      } catch (error) {
        console.log("Error al obtener los últimos usuarios", error);
      }
    };

    fetchLastUserFromAPI();
  }, []);

  return (
    <Container>
      <TopBar top="true" />
      <h2>.........Tu pase de abordar........</h2>
      <BoardingPass>
        <Grid>
          <ReservationCodeTitle>
            Código de Reserva: IZSJ344
          </ReservationCodeTitle>
          <ContBord1>
          <BoardingPassItem>
            <strong>
              Ciudad de Origen: <span>{filters.selectedCity.slice(-3)}</span>
            </strong>
          </BoardingPassItem>
          <BoardingPassItem>
            <strong>
              Fecha de vuelo salida: <span>{filters.dateDre}</span>
            </strong>
          </BoardingPassItem>
          <BoardingPassItem>
            <strong>
              Hora de Salida: <span>{filters.departureTime1}</span>
            </strong>
          </BoardingPassItem>
          <BoardingPassItem>
            <strong>
            Asientos de Salida: <span>{selectedSeat.join(", ")}</span>
            </strong>
          </BoardingPassItem>
          </ContBord1>
          <ContBord2>
          <BoardingPassItem>
            <strong>
              Ciudad de Destino: {filters.selectedCityDon.slice(-3)}
            </strong>
          </BoardingPassItem>
          <BoardingPassItem>
            <strong>
              Fecha de vuelo llegada:<span> {filters.date}</span>
            </strong>
          </BoardingPassItem>
          <BoardingPassItem>
            <strong>
              Hora de Llegada:<span> {filters.arrivalTime1}</span>
            </strong>
          </BoardingPassItem>
          <BoardingPassItem>
            <strong>
            Asientos de Regreso: <span> {selectedSeatArrival.join(", ")}</span>
            </strong>
          </BoardingPassItem>
          </ContBord2>
        </Grid>
        <UserDataColumn>
          <UserDataItem >
            <strong>Nombre:</strong> {userData && userData.username}
          </UserDataItem>
          <UserDataItem>
            <strong>Documento de Identidad:</strong>{" "}
            {userData && userData.documentId}
          </UserDataItem>
          <UserDataItem>
            <strong>Correo Electrónico:</strong> {userData && userData.email}
          </UserDataItem>
          <UserDataItem>
            <strong>Teléfono:</strong> {userData && userData.phone}
          </UserDataItem>
          <UserDataItem><img src={QrCode} alt="QrCode" /></UserDataItem>
        </UserDataColumn>
        
      </BoardingPass>
      <BottomBar />
    </Container>
  );
};

export default BoardingTicket;
