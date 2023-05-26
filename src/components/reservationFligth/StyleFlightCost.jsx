import styled from "styled-components";

export const ContenedorCost = styled.div`
position: fixed;
top: 40%;
right: 80px;
width: 25%;
 h1{
  font-size: 1.2rem;
  margin-bottom: 10px;    
 }
`
export const StyleContainerCost = styled.div`
border-radius: 5px;
background-color: white;
box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`
export const ContainerCost = styled.div`
display: grid;
grid-template-columns: 3fr 1fr; /* Crea dos columnas de igual ancho */
padding: 10px;
p{
    margin-bottom: 10px;
}
`
export const ColumnCost = styled.div`
justify-self: end;
grid-row-gap: 1em;
`

export const Contenedor = styled.div`
  position: fixed;
  top: 40%;
  right: 80px;
  width: 25%;
  h1 {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }
  @media (max-width: 1200px) {
    position: relative;
    top: -1403px;
    width: 45%;
    right: -356px;
  }
  @media (max-width: 828px) {
    position: relative;
    top: -1475px;
    right: -348px;
  }

  @media (max-width: 758px) {
    position: relative;
    top: -1345px;
    right: -4px;
    width: 100%;
  }

  @media (max-width: 659px) {
    position: relative;
    width: 100%;
    top: -3124px;
    right: 2px;
  }
  @media (max-width: 375px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    position: relative;
    top: -3158px;
    right: 2px;
  }
`;

export const StyleContainer = styled.div`
  border-radius: 5px;
  background-color: white;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;
export const Container = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr; /* Crea dos columnas de igual ancho */
  padding: 15px;
  p {
    margin-bottom: 9px;
    
  }
`;
export const Column = styled.div`
  justify-self: end;
  grid-row-gap: 1em;
`;

