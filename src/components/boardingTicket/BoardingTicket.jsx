import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import { searchParamsContext } from "../../Routes/AppRouter";

// Componente de estilo para el pase de abordar
const BoardingPass = styled.div`
  width: 824px;
  padding: 43px;
  border-radius: 15px;
  height: 364px;
`;

// Componente de estilo para los elementos del pase de abordar
const BoardingPassItem = styled.div`
  margin-bottom: 15px;
`;

// Componente de estilo para las barras horizontales
const HorizontalBar = styled.div`
  height: 58px;
  background-color: #9e1071;
  z-index: -1;
  border-radius: ${(props) => (props.top ? "37px 37px 0 0" : "0 0 37px 37px")};
`;

// Componente de estilo para el contenedor principal
const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  border: 1px solid #ccc;
  border-radius: 40px;
  padding: 33px;
  width: 900px;
  flex-direction: column;

  h2 {
    color: white;
    text-transform: uppercase;
    margin-top: -7px;
    font-size: 18px;
    letter-spacing: 18px;
    margin-left: 27px;
  }
`;

// Componente de estilo para la franja superior
const TopBar = styled(HorizontalBar)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

// Componente de estilo para la franja inferior
const BottomBar = styled(HorizontalBar)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

// Componente de estilo para la cuadrícula de dos columnas
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`;

// Componente de estilo para el título del código de reserva
const ReservationCodeTitle = styled.h3`
  grid-column: 1 / span 2;
`;

const BoardingTicket = () => {
    const [userData, setUserData] = useState(null);
    const {
      filters,
    } = useContext(searchParamsContext);
  
    useEffect(() => {
        const fetchLastUserFromAPI = async () => {
          try {
            // Realiza la solicitud GET a la API para obtener el último usuario
            const response = await axios.get("http://localhost:4000/compra?_sort=createdAt&_order=desc&_limit=1");
            const data = response.data;
            console.log("Último usuario:", data);
      
            if (data.length > 0) {
              // Si se encontró al menos un usuario, guarda los datos en el estado
              setUserData(data[0]);
            } else {
              // No se encontraron usuarios
              setUserData(null);
            }
          } catch (error) {
            console.log("Error al obtener el último usuario", error);
          }
        };
      
        fetchLastUserFromAPI();
      }, []);
      
    
  return (
    <Container>
      <TopBar top="true" />
      <h2>Tu pase de abordar</h2>
      <BoardingPass>
        <Grid>
          <ReservationCodeTitle>
            Código de Reserva: IZSJ344
          </ReservationCodeTitle>
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
            <strong>Ciudad de Destino: {filters.selectedCityDon.slice(-3)}</strong>
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
            <strong>Nombre: {userData && userData.username}</strong>
          </BoardingPassItem>
          <BoardingPassItem>
            <strong>
              Documento de Identidad: {userData && userData.documentId}
            </strong>
          </BoardingPassItem>
          <BoardingPassItem>
            <strong>Correo Electrónico: {userData && userData.email}</strong>
          </BoardingPassItem>
          <BoardingPassItem>
            <strong>Telefono: {userData && userData.phone}</strong>
          </BoardingPassItem>
        </Grid>
      </BoardingPass>
      <BottomBar />
    </Container>
  );
};

export default BoardingTicket;

// const BoardingTicket = ({ reservationCode, originCity, destinationCity, username, documentId, email, address, paymentMethod }) => {
//     return (
//       <div>
//         <h2>Tu pase de abordar</h2>
//         <BoardingPass>
//           <BoardingPassItem>
//             <strong>Código de Reserva:</strong> {reservationCode}
//           </BoardingPassItem>
//           <BoardingPassItem>
//             <strong>Origen:</strong> {originCity}
//           </BoardingPassItem>
//           <BoardingPassItem>
//             <strong>Destino:</strong> {destinationCity}
//           </BoardingPassItem>
//           <BoardingPassItem>
//             <strong>Nombre:</strong> {username}
//           </BoardingPassItem>
//           <BoardingPassItem>
//             <strong>Documento de Identidad:</strong> {documentId}
//           </BoardingPassItem>
//           <BoardingPassItem>
//             <strong>Correo Electrónico:</strong> {email}
//           </BoardingPassItem>
//           <BoardingPassItem>
//             <strong>Dirección:</strong> {address}
//           </BoardingPassItem>
//           <BoardingPassItem>
//             <strong>Método de Pago:</strong> {paymentMethod}
//           </BoardingPassItem>
//         </BoardingPass>
//       </div>
//     );
//   };

//   export default BoardingTicket;

// const TicketPage = ({ formData }) => {
//     const { username, documentId, email, address, paymentMethod } = formData;

//     return (
//       <div>
//         <h2>Tu pase de abordar</h2>
//         <BoardingPass>
//           <BoardingPassItem>
//             <strong>Nombre:</strong> {username}
//           </BoardingPassItem>
//           <BoardingPassItem>
//             <strong>Documento de Identidad:</strong> {documentId}
//           </BoardingPassItem>
//           <BoardingPassItem>
//             <strong>Correo Electrónico:</strong> {email}
//           </BoardingPassItem>
//           <BoardingPassItem>
//             <strong>Dirección:</strong> {address}
//           </BoardingPassItem>
//           <BoardingPassItem>
//             <strong>Método de Pago:</strong> {paymentMethod}
//           </BoardingPassItem>
//         </BoardingPass>
//       </div>
//     );
//   };

//   export default TicketPage;
