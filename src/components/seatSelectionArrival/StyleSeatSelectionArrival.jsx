import styled from "styled-components";

export const SeatSelectArrival = styled.div`
  display: flex;
  justify-content: space-between;
  width: 400px;
  margin-bottom: 7px;
`;

export const ReferentSeatArrival = styled.div`
  display: flex;
  justify-content: space-between;
  width: 400px;
  margin-bottom: 7px;
`;

export const SubtittleArrival = styled.div`
  margin-bottom: 10px;
`;

export const RowArrival = styled.div`
  display: flex;
  justify-content: space-between;
  width: 200px;
`;

export const Column2Arrival = styled.div`
  display: flex;
  flex-direction: column;
`;
export const AisleArrival = styled.div`
  height: 50px;
  width: 50px;
  color: black;
  background-color: white;
  border-radius: 5px;
  margin-bottom: 10px;
  margin-right: 10px;
  padding: 20px;
`;

export const ColumnArrival = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ButtonArrival = styled.button`
  height: 50px;
  width: 50px;
  background-color: #b9b9b9;
  border: none;
  border-radius: 5px;
  margin-bottom: 10px;
  margin-right: 10px;
  cursor: pointer;
  &:hover {
    background-color: var(--purple);
    }
`;


//Estilos Fechas de vielo Arrival
export const StyledDateArrival = styled.div`
  margin-bottom: 1rem;

  h1 {
    margin-bottom: 1rem;
    font-weight: bold;
  }
  h2 {
    margin-bottom: 0.5rem;
  }
  h4 {
    color: rgb(150, 150, 150);
    margin-bottom: 2rem;
  }
  p {
    font-weight: bold;
    margin-bottom: 1rem;
  }
  @media (max-width: 1200px) {
    h2 {
      position: relative;
      top: 60px;
    }

    h4 {
      position: relative;
      top: 70px;
    }
    p {
      position: relative;
      top: 70px;
    }
  }

  @media (max-width: 375px) {
    h2 {
      position: relative;
      top: 70px;
    }

    h4 {
      position: relative;
      top: 70px;
    }
    p {
      position: relative;
      top: 70px;
      margin-bottom: 5rem;
    }
  } 
`;

export const StyledContainerArrival = styled.div`
  display: flex;
  align-items: center;
  width: 800px;

  @media (max-width: 1200px) {
    position: relative;
    top: 10px;
  }

  /* @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    top: 357px;
  } */
  @media (max-width: 375px) {
    position: relative;
    top: 1px;
    width:400px;
  }
`;

export const StyleBottonArrivals = styled.div`
  border-radius: 15px;
  border: 1px solid #9e1071;
  background-color: transparent;
  padding: 10px 16px;
  margin-top: 1rem;
  margin-left: auto;
  font-size: 16px;
  font-weight: bold;
  width: 180px;
  color: #9e1071;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 100px;
  


  &:hover {
    background-color: #9e1071;
    cursor: pointer;
    color: white;
  }
  @media (max-width: 1200px) {
    display: flex;
    margin-bottom: 19px;
    margin-left: -276px;
    position: relative;
    top: 37px;
    z-index: 2;
  }

  @media (max-width: 375px) {
    margin-left: -277px;
    position: relative;
    top: 40px;
  }
`;

export const StyleArrivals = styled.div`
  margin-bottom: 3rem;
  background-color: transparent;
  justify-content: space-between;
`;

