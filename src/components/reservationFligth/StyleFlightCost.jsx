import styled from "styled-components"

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