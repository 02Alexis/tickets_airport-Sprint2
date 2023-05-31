import styled from "styled-components";

export const BoardingPass = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 43px;
  border-radius: 15px;
  height: 364px;
  width: 627px;
  
  @media (max-width: 375px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 121%;
    position: relative;
    left: -13px;
   
  }
  
`;

export const Grid = styled.div`
  grid-gap: 29px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  left: -25px;
  position: relative;

  @media (max-width: 375px) {
  top: -250px; 
  }


`;

export const UserDataColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  left: 340px;
  position: relative;
  background-color: #f2f2f2;
  border-radius: 8px;
  padding: 15px;
  width: 245px;

  img{
    width: 80px;
  }

  @media (max-width: 375px) {
    top: -150px;
    width: 357px;
    left: -26px;

  }
`;
 
//contenedor items
export const ContBord1 = styled.div`
 border: 1px solid #ccc;
  border-radius: 15px;
`;

export const ContBord2 = styled.div`
 border: 1px solid #ccc;
  border-radius: 15px;
  top: 45px;
  position: relative;
`;

export const UserDataItem = styled.div`
  margin-bottom: 15px;
  word-break: break-all;
`;

// Componente de estilo para los elementos del pase de abordar
export const BoardingPassItem = styled.div`
  margin-bottom: 15px;
  padding: 9px;
  width: 100%;
`;

// Componente de estilo para las barras horizontales
export const HorizontalBar = styled.div`
  height: 58px;
  background-color: #9e1071;
  z-index: -1;
  border-radius: ${(props) => (props.top ? "37px 37px 0 0" : "0 0 37px 37px")};
`;

// Componente de estilo para el contenedor principal
export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 24px 46px 16px rgba(0, 0, 0, 0.2);
  border: 1px solid #ccc;
  border-radius: 40px;
  padding: 28px;
  width: 991px;
  left: 154px;
  flex-wrap: wrap;

  h2 {
    color: white;
    text-transform: uppercase;
    margin-top: -7px;
    font-size: 18px;
    letter-spacing: 18px;
    margin-left: 27px;
  }

  @media (max-width: 375px) {
    display: flex;
    width: 311px;
    left: -14px;
    height: 1016px;
    box-shadow: none;

    h2{
      letter-spacing: -1px;
    }
  }
  
`;

// Componente de estilo para la franja superior
export const TopBar = styled(HorizontalBar)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

// Componente de estilo para la franja inferior
export const BottomBar = styled(HorizontalBar)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

// Componente de estilo para el título del código de reserva
export const ReservationCodeTitle = styled.h3`
  grid-column: 1 / span 2;
`;

export const QRCodeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;